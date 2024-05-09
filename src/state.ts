import { Handle } from "./types";

export const canvas = document.getElementById("canvas") as HTMLCanvasElement;

export const lines = 10;
export const padding = 50;
export const pointWidth = 10;
export const pointHoveredWidth = 15;
export const width = canvas.width - padding * 2;
export const height = canvas.height - padding * 2;

export const handles: Record<number, Handle> = {
  0: {
    state: "chilling",
    size: pointWidth,
    position: {
      x: padding,
      y: height + padding,
    },
  },
  1: {
    state: "chilling",
    size: pointWidth,
    position: {
      x: width + padding,
      y: padding,
    },
  },
};

export const bezierHandles: Record<number, Handle> = {
  0: {
    state: "chilling",
    size: pointWidth,
    position: {
      x: width / 6 + padding,
      y: height / 2 + padding,
    },
  },
  1: {
    state: "chilling",
    size: pointWidth,
    position: {
      x: width + padding - width / 6,
      y: height / 2 + padding,
    },
  },
};
