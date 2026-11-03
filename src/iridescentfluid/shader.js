/**
 * A WebGL shader of a viscous, iridescent liquid that sloshes slowly, like liquid chrome
 * lit in violet, magenta and blue.
 *
 * A height field made of smooth noise, warped by more noise, stands in for the surface.
 * Its slope gives each point a normal, which sets the color the way a thin oil film
 * shifts hue with angle, plus soft highlights and a bright rim where the surface turns
 * away. `time` is in seconds and only drifts the warping, so the motion stays gentle.
 */
export const IRIDESCENT_FLUID_VERT = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

export const IRIDESCENT_FLUID_FRAG = `
precision highp float;

uniform vec2 resolution;
uniform float time;
// Stage blends: 1 is fully white / cream / pearl, 0 shows the iridescent colors.
uniform float white;
uniform float cream;
uniform float pearl;
// How hard the liquid churns: 1 is its resting state, higher folds it more tightly.
uniform float turbulence;
// The cursor or finger, in screen-height units from the top left, its smoothed velocity in
// those units per second, and how strongly it touches the liquid (0 to 1).
uniform vec2 pointer;
uniform vec2 pointerVel;
uniform float pointerStrength;

// Stretches the liquid sideways, into long horizontal folds.
const vec2 SCALE = vec2(2.8, 5.6);

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;
  for (int i = 0; i < 2; i++) {
    value += amplitude * noise(p);
    p = p * 2.02 + vec2(1.7, 9.2);
    amplitude *= 0.5;
  }
  return value;
}

// The liquid's surface height at p. Warping by noise folds it into long, slow ripples.
// Near the pointer the liquid is dragged along with it and lifts into a soft bulge.
float surface(vec2 p, float t) {
  vec2 d = p / SCALE - pointer;
  float touch = exp(-dot(d, d) / 0.018) * pointerStrength;
  p -= pointerVel * SCALE * touch * 0.12;

  vec2 q = vec2(
    fbm(p + vec2(0.0, t * 0.10)),
    fbm(p + vec2(5.2, 1.3) - t * 0.08)
  );
  return fbm(p + 1.8 * turbulence * q + vec2(t * 0.03, 0.0)) + touch * 0.18;
}

void main() {
  // WebGL's origin is bottom-left; flip y so it matches the original top-left layout.
  vec2 xy = vec2(gl_FragCoord.x, resolution.y - gl_FragCoord.y);

  vec2 uv = xy / resolution.y;
  vec2 p = uv * SCALE;

  float e = 0.01;
  float h = surface(p, time);
  float hx = surface(p + vec2(e, 0.0), time);
  float hy = surface(p + vec2(0.0, e), time);
  vec3 n = normalize(vec3((h - hx) / e * 0.8, (h - hy) / e * 0.8, 1.0));

  vec3 viewDir = vec3(0.0, 0.0, 1.0);
  float facing = max(dot(n, viewDir), 0.0);
  float rim = pow(1.0 - facing, 1.6);

  // Thin-film colors: the hue turns with the surface's tilt and height, through magenta,
  // violet and cyan-blue, and never into greens or yellows. Broad, slow-drifting zones
  // shift the film's hue, so color varies across the liquid.
  float zone = noise(p * vec2(0.35, 0.5) + vec2(time * 0.02, 0.0));
  float a = h * 2.2 + rim * 1.4 + n.x * 0.6 - n.y * 0.4 + zone * 1.6;
  float band = 0.5 + 0.5 * cos(6.28318 * a);
  float band2 = smoothstep(0.35, 1.0, 0.5 + 0.5 * cos(6.28318 * (a * 0.7 + 0.33)));
  vec3 magenta = vec3(0.95, 0.30, 0.85);
  vec3 violet = vec3(0.42, 0.22, 0.95);
  vec3 cyan = vec3(0.30, 0.70, 1.00);
  vec3 film = mix(mix(violet, magenta, band), cyan, band2 * 0.8);

  // Deep indigo in the troughs, the film's color where the surface catches the light.
  vec3 deep = vec3(0.07, 0.03, 0.24);
  float lit = smoothstep(0.0, 0.85, rim * 1.2 + (n.y + 0.2) * 0.5);
  vec3 color = mix(deep, film, 0.25 + 0.75 * lit);

  // Highlights where the surface faces the light, as on liquid metal.
  vec3 lightDir = normalize(vec3(-0.35, 0.55, 0.75));
  vec3 halfDir = normalize(lightDir + viewDir);
  float spec = pow(max(dot(n, halfDir), 0.0), 90.0);
  float sheen = pow(max(dot(n, halfDir), 0.0), 12.0);
  color += spec * vec3(1.0, 0.92, 1.0) * 1.1;
  color += sheen * film * 0.25;
  color += pow(rim, 3.0) * vec3(0.95, 0.55, 1.0) * 0.5;

  // Pearlescent version of the same surface: pale lavender, blush and aqua over a
  // milky base, with white highlights, like the inside of a shell.
  vec3 pearlPink = vec3(0.98, 0.86, 0.92);
  vec3 pearlLilac = vec3(0.85, 0.84, 0.99);
  vec3 pearlAqua = vec3(0.80, 0.95, 0.96);
  vec3 pearlFilm = mix(mix(pearlLilac, pearlPink, band), pearlAqua, band2 * 0.8);
  vec3 pearlBase = vec3(0.80, 0.78, 0.86);
  vec3 pearlColor = mix(pearlBase, pearlFilm, 0.4 + 0.6 * lit);
  pearlColor += spec * vec3(1.0) * 0.9;
  pearlColor += sheen * vec3(1.0) * 0.15;
  pearlColor += pow(rim, 3.0) * vec3(1.0, 0.95, 1.0) * 0.3;
  color = mix(color, pearlColor, pearl);

  // Intro: the liquid starts pure white, settles into silky cream, then takes on color.
  // The cream stage keeps the surface's light and shade, from buttermilk in the folds to
  // off-white where it catches the light, with a soft white sheen on top.
  float luma = dot(clamp(color, 0.0, 1.0), vec3(0.299, 0.587, 0.114));
  vec3 buttermilk = vec3(0.96, 0.95, 0.91);
  vec3 offWhite = vec3(0.99, 0.985, 0.97);
  vec3 creamColor = mix(buttermilk, offWhite, smoothstep(0.1, 0.8, luma));
  creamColor += (spec * 0.6 + sheen * 0.12) * vec3(1.0, 0.99, 0.96);
  color = mix(color, creamColor, cream);
  color = mix(color, vec3(1.0), white);

  gl_FragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
}
`;
