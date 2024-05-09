import { Vector2 } from "./types";

export const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
};

export const lerp = (a: number, b: number, t: number) => {
  return a + (b - a) * t;
};

export const vector2Lerp = (a: Vector2, b: Vector2, t: number) => {
  return {
    x: lerp(a.x, b.x, t),
    y: lerp(a.y, b.y, t),
  };
};

export const bezierCubic = (
  p1: Vector2,
  p2: Vector2,
  p3: Vector2,
  p4: Vector2,
  t: number,
) => {
  const p5 = vector2Lerp(p1, p2, t);
  const p6 = vector2Lerp(p2, p3, t);
  const p7 = vector2Lerp(p3, p4, t);
  const p8 = vector2Lerp(p5, p6, t);
  const p9 = vector2Lerp(p6, p7, t);
  const p10 = vector2Lerp(p8, p9, t);

  return p10;
};
