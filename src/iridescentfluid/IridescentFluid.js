import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IRIDESCENT_FLUID_FRAG, IRIDESCENT_FLUID_VERT } from './shader';
import { useFluidBackdropPalette } from './backdrop';

/**
 * The shader runs at this fraction of the screen's resolution and is scaled up. The
 * liquid is soft enough that it looks the same, for a quarter of the GPU work.
 */
const RENDER_SCALE = 0.5;

/** Seconds the intro takes to go from pure white to cream. */
export const WHITE_TO_CREAM = 2.5;
/** Seconds the intro then takes to go from cream to full color. */
export const CREAM_TO_COLOR = 3.5;
/** Seconds the full iridescent colors show before turning pearlescent. */
const COLOR_HOLD = 3;
/** Seconds the shift from iridescent to pearlescent takes. */
const COLOR_TO_PEARL = 2;
/** Seconds the pearlescent colors show before the background fades away. */
const PEARL_HOLD = 5;

const COLOR_END = WHITE_TO_CREAM + CREAM_TO_COLOR;
const PEARL_START = COLOR_END + COLOR_HOLD;
/** Seconds after load when the liquid has calmed to its resting turbulence. */
const CALM_END = PEARL_START + COLOR_TO_PEARL;
/** How much more the liquid churns at load: it folds this many times harder... */
const START_WARP = 3.5;
/** ...and moves this many times faster. */
const START_SPEED = 5;

/** Seconds after load when the background starts to fade away. */
const FADE_START = PEARL_START + COLOR_TO_PEARL + PEARL_HOLD;
/** Seconds the fade-out at the end of the intro takes. */
const INTRO_FADE = 2;
/** Seconds the background takes to fade in or out with Experience or the contact form. */
const BACKDROP_FADE = 0.8;
/** How quickly the colors move between palettes after the intro (higher is faster). */
const PALETTE_RATE = 2;

/** How fast the bulge under the pointer grows in and settles back (per second). */
const TOUCH_IN_RATE = 4;
const TOUCH_OUT_RATE = 1.5;
/** Milliseconds a still cursor keeps touching the liquid before it settles back. */
const TOUCH_IDLE_MS = 2000;
/** Caps how hard a fast flick can drag the liquid, in screen heights per second. */
const MAX_DRAG = 1.5;

// The timeline lives outside the component, so when the canvas comes back for Experience
// or the contact form it picks up where the intro left off, calm. `pearl` is the current
// pearl blend, which eases toward the requested palette once the intro is over.
const clock = { elapsed: 0, time: 0, pearl: 0 };

function compile(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }
    return shader;
}

/** Eases in and out, so each intro step starts and settles gently. */
function smoothstep(x) {
    const t = Math.min(Math.max(x, 0), 1);
    return t * t * (3 - 2 * t);
}

/**
 * The WebGL canvas. It draws for as long as it is mounted, and calls onIntroEnd once the
 * intro reaches its fade-out point, or onFailed if WebGL is unavailable.
 */
function FluidCanvas({ palette, onIntroEnd, onFailed }) {
    const canvasRef = useRef(null);
    const callbacks = useRef({ onIntroEnd, onFailed });
    callbacks.current = { onIntroEnd, onFailed };
    const targetPearl = useRef(0);
    targetPearl.current = palette === 'iridescent' ? 0 : 1;

    // Coming back after the intro, start in the requested palette instead of easing into it.
    if (clock.elapsed >= FADE_START && canvasRef.current === null) {
        clock.pearl = targetPearl.current;
    }

    useEffect(() => {
        const fail = () => callbacks.current.onFailed();
        const canvas = canvasRef.current;
        const gl = canvas && canvas.getContext('webgl', { antialias: false, alpha: false });
        if (!gl) {
            fail();
            return;
        }

        const vert = compile(gl, gl.VERTEX_SHADER, IRIDESCENT_FLUID_VERT);
        const frag = compile(gl, gl.FRAGMENT_SHADER, IRIDESCENT_FLUID_FRAG);
        if (!vert || !frag) {
            fail();
            return;
        }

        const program = gl.createProgram();
        gl.attachShader(program, vert);
        gl.attachShader(program, frag);
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error(gl.getProgramInfoLog(program));
            fail();
            return;
        }
        gl.useProgram(program);

        // One triangle that covers the whole screen.
        const buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
        const position = gl.getAttribLocation(program, 'position');
        gl.enableVertexAttribArray(position);
        gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

        const resolutionLoc = gl.getUniformLocation(program, 'resolution');
        const timeLoc = gl.getUniformLocation(program, 'time');
        const whiteLoc = gl.getUniformLocation(program, 'white');
        const creamLoc = gl.getUniformLocation(program, 'cream');
        const pearlLoc = gl.getUniformLocation(program, 'pearl');
        const turbulenceLoc = gl.getUniformLocation(program, 'turbulence');
        const pointerLoc = gl.getUniformLocation(program, 'pointer');
        const pointerVelLoc = gl.getUniformLocation(program, 'pointerVel');
        const pointerStrengthLoc = gl.getUniformLocation(program, 'pointerStrength');

        // The cursor or finger, in screen heights from the top left (the shader's units).
        // x/y is where it is; sx/sy trails behind it smoothly, and vx/vy is how fast that
        // trailing point moves.
        const pointer = { x: 0, y: 0, sx: 0, sy: 0, vx: 0, vy: 0, strength: 0, down: false, lastMove: -Infinity };

        const onPointerMove = (e) => {
            pointer.x = e.clientX / window.innerHeight;
            pointer.y = e.clientY / window.innerHeight;
            if (pointer.strength < 0.01) {
                // Starting fresh: appear under the pointer instead of sliding in from afar.
                pointer.sx = pointer.x;
                pointer.sy = pointer.y;
                pointer.vx = 0;
                pointer.vy = 0;
            }
            pointer.lastMove = performance.now();
            if (e.pointerType === 'mouse' || e.type === 'pointerdown') pointer.down = true;
        };
        const onPointerUp = (e) => {
            // A lifted finger lets go; a mouse keeps hovering.
            if (e.pointerType !== 'mouse') pointer.down = false;
        };
        const onPointerOut = (e) => {
            if (!e.relatedTarget) pointer.down = false; // the cursor left the window
        };

        const updatePointer = (dt) => {
            const touching = !motionQuery.matches && pointer.down
                && performance.now() - pointer.lastMove < TOUCH_IDLE_MS;
            const rate = touching ? TOUCH_IN_RATE : TOUCH_OUT_RATE;
            pointer.strength += ((touching ? 1 : 0) - pointer.strength) * Math.min(1, dt * rate);

            const follow = 1 - Math.exp(-dt * 10);
            const nx = pointer.sx + (pointer.x - pointer.sx) * follow;
            const ny = pointer.sy + (pointer.y - pointer.sy) * follow;
            const ease = 1 - Math.exp(-dt * 6);
            if (dt > 0) {
                pointer.vx += ((nx - pointer.sx) / dt - pointer.vx) * ease;
                pointer.vy += ((ny - pointer.sy) / dt - pointer.vy) * ease;
            }
            const speed = Math.hypot(pointer.vx, pointer.vy);
            if (speed > MAX_DRAG) {
                pointer.vx *= MAX_DRAG / speed;
                pointer.vy *= MAX_DRAG / speed;
            }
            pointer.sx = nx;
            pointer.sy = ny;
        };

        // 1 at load, easing to 0 once the liquid has calmed.
        const churn = () => 1 - smoothstep(clock.elapsed / CALM_END);

        const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        let last = null;
        let rafId = null;
        let introEnded = clock.elapsed >= FADE_START;

        const draw = () => {
            gl.uniform2f(resolutionLoc, canvas.width, canvas.height);
            const { elapsed, time } = clock;
            gl.uniform1f(timeLoc, time);
            gl.uniform1f(whiteLoc, 1 - smoothstep(elapsed / WHITE_TO_CREAM));
            gl.uniform1f(creamLoc, 1 - smoothstep((elapsed - WHITE_TO_CREAM) / CREAM_TO_COLOR));
            gl.uniform1f(pearlLoc, clock.pearl);
            // Under reduced motion the liquid holds still, so it skips the churn too.
            const warp = motionQuery.matches ? 1 : 1 + (START_WARP - 1) * churn();
            gl.uniform1f(turbulenceLoc, warp);
            gl.uniform2f(pointerLoc, pointer.sx, pointer.sy);
            gl.uniform2f(pointerVelLoc, pointer.vx, pointer.vy);
            gl.uniform1f(pointerStrengthLoc, pointer.strength);
            gl.drawArrays(gl.TRIANGLES, 0, 3);
        };

        const resize = () => {
            const width = Math.max(1, Math.round(window.innerWidth * RENDER_SCALE));
            const height = Math.max(1, Math.round(window.innerHeight * RENDER_SCALE));
            if (canvas.width !== width || canvas.height !== height) {
                canvas.width = width;
                canvas.height = height;
                gl.viewport(0, 0, width, height);
            }
            draw();
        };

        const frame = (now) => {
            if (last !== null) {
                const dt = (now - last) / 1000;
                clock.elapsed += dt;
                if (clock.elapsed < FADE_START) {
                    clock.pearl = smoothstep((clock.elapsed - PEARL_START) / COLOR_TO_PEARL);
                } else {
                    // Ease toward the requested palette.
                    const target = targetPearl.current;
                    clock.pearl += (target - clock.pearl) * Math.min(1, dt * PALETTE_RATE);
                }
                if (!motionQuery.matches) clock.time += dt * (1 + (START_SPEED - 1) * churn());
                updatePointer(dt);
            }
            last = now;
            draw();
            if (clock.elapsed >= FADE_START && !introEnded) {
                introEnded = true;
                callbacks.current.onIntroEnd();
            }
            rafId = requestAnimationFrame(frame);
        };

        const stop = () => {
            if (rafId !== null) cancelAnimationFrame(rafId);
            rafId = null;
            last = null;
        };

        // The timeline keeps running under reduced motion (so the colors still shift and
        // the fade still happens), but pauses while the tab is hidden.
        const update = () => {
            if (!document.hidden && rafId === null) rafId = requestAnimationFrame(frame);
            if (document.hidden) stop();
        };

        resize();
        update();
        window.addEventListener('resize', resize);
        document.addEventListener('visibilitychange', update);
        // The canvas ignores clicks, so the pointer is watched on the window instead.
        window.addEventListener('pointermove', onPointerMove, { passive: true });
        window.addEventListener('pointerdown', onPointerMove, { passive: true });
        window.addEventListener('pointerup', onPointerUp, { passive: true });
        window.addEventListener('pointercancel', onPointerUp, { passive: true });
        window.addEventListener('pointerout', onPointerOut, { passive: true });

        return () => {
            stop();
            window.removeEventListener('resize', resize);
            document.removeEventListener('visibilitychange', update);
            window.removeEventListener('pointermove', onPointerMove);
            window.removeEventListener('pointerdown', onPointerMove);
            window.removeEventListener('pointerup', onPointerUp);
            window.removeEventListener('pointercancel', onPointerUp);
            window.removeEventListener('pointerout', onPointerOut);
            gl.deleteBuffer(buffer);
            gl.deleteProgram(program);
            gl.deleteShader(vert);
            gl.deleteShader(frag);
        };
    }, []);

    return (
        <motion.canvas
            ref={canvasRef}
            aria-hidden="true"
            variants={fadeVariants}
            initial={clock.elapsed >= FADE_START ? 'hidden' : false}
            animate="shown"
            exit="hidden"
            style={{
                position: 'fixed',
                inset: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -1,
                pointerEvents: 'none',
                display: 'block',
            }}
        />
    );
}

// The fade length comes from AnimatePresence's `custom`, so the canvas can leave slowly at
// the end of the intro and quickly when Experience closes.
const fadeVariants = {
    shown: { opacity: 1, transition: { duration: BACKDROP_FADE, ease: 'easeInOut' } },
    hidden: (seconds = BACKDROP_FADE) => ({
        opacity: 0,
        transition: { duration: seconds, ease: 'easeInOut' },
    }),
};

/**
 * A fixed, full-viewport background of viscous, iridescent liquid that sloshes gently.
 * On load it fades from pure white to silky cream to full color, turns pearlescent, then
 * fades out and is removed. It starts out churning hard and calms down by the time the
 * colors settle on pearl. Afterwards it fades back in whenever a component calls
 * useShowFluidBackdrop (Experience and the contact form both use the pearlescent colors).
 * The cursor, or a finger on touch screens, presses a soft bulge into the liquid and drags
 * it along.
 * The timeline only runs while the tab is visible, and the liquid holds still when the
 * user prefers reduced motion.
 */
export default function IridescentFluid() {
    const [introOver, setIntroOver] = useState(clock.elapsed >= FADE_START);
    const [failed, setFailed] = useState(false);
    const palette = useFluidBackdropPalette();
    const backdropShown = palette !== null;
    // Keep the last palette while fading out, so the colors don't jump as it leaves.
    const lastPalette = useRef(palette);
    if (palette !== null) lastPalette.current = palette;

    // Leaving because Experience or the contact form closed is a quick fade; leaving at
    // the end of the intro is the slow one.
    const wasBackdropShown = useRef(backdropShown);
    const exitSeconds = wasBackdropShown.current && !backdropShown ? BACKDROP_FADE : INTRO_FADE;
    useEffect(() => {
        wasBackdropShown.current = backdropShown;
    });

    const visible = !failed && (!introOver || backdropShown);

    return (
        <AnimatePresence custom={exitSeconds}>
            {visible && (
                <FluidCanvas
                    key="fluid"
                    palette={lastPalette.current}
                    onIntroEnd={() => setIntroOver(true)}
                    onFailed={() => setFailed(true)}
                />
            )}
        </AnimatePresence>
    );
}
