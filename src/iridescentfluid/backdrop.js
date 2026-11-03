import { useEffect, useSyncExternalStore } from 'react';

// A tiny shared store of which components want the fluid background, and in which
// palette. IridescentFluid reads it once its intro is over.
const counts = { iridescent: 0, pearl: 0 };
const listeners = new Set();

function emit() {
    listeners.forEach((listener) => listener());
}

function subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
}

function getPalette() {
    if (counts.iridescent > 0) return 'iridescent';
    if (counts.pearl > 0) return 'pearl';
    return null;
}

/**
 * Shows the fluid background in the given palette ('iridescent' or 'pearl') while the
 * calling component is mounted and `active` is true.
 */
export function useShowFluidBackdrop(palette, active = true) {
    useEffect(() => {
        if (!active) return;
        counts[palette] += 1;
        emit();
        return () => {
            counts[palette] -= 1;
            emit();
        };
    }, [palette, active]);
}

/** The palette some component wants right now, or null if none does. */
export function useFluidBackdropPalette() {
    return useSyncExternalStore(subscribe, getPalette);
}
