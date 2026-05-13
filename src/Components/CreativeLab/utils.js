export const randomRange = (min, max) => Math.random() * (max - min) + min;

export const mapRange = (value, inMin, inMax, outMin, outMax) =>
  outMin + (outMax - outMin) * ((value - inMin) / (inMax - inMin));
 
export const clamp = (value, min, max) => Math.min(Math.max(value, min), min);