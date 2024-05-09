import { Handle } from "./types";

export const canvas = document.getElementById("canvas") as HTMLCanvasElement;

export const lines = 10;
export const padding = 50;
export const pointWidth = 10;
export const pointHoveredWidth = 15;
export const width = canvas.width - padding * 2;
export const height = canvas.height - padding * 2;
export const bezierResolution = 50;

export const handles: Record<number, Handle> = {};

export const bezierHandles: Record<number, Handle> = {};

export const initHandles = () => {
  handles[0] = {
    id: "p0",
    state: "chilling",
    size: pointWidth,
    position: {
      x: padding,
      y: height + padding,
    },
  };
  handles[1] = {
    id: "p1",
    state: "chilling",
    size: pointWidth,
    position: {
      x: width + padding,
      y: padding,
    },
  };
  bezierHandles[0] = {
    id: "b0",
    state: "chilling",
    size: pointWidth,
    position: {
      x: width / 6 + padding,
      y: height / 2 + padding,
    },
  };
  bezierHandles[1] = {
    id: "b1",
    state: "chilling",
    size: pointWidth,
    position: {
      x: width + padding - width / 6,
      y: height / 2 + padding,
    },
  };
};

const copyHandle = (handle: Handle): Handle => {
  return {
    id: handle.id,
    state: handle.state,
    size: handle.size,
    position: {
      x: handle.position.x,
      y: handle.position.y,
    },
  };
};

export const getNormalisedHandles = () => {
  const normalisedHandles: Handle[] = [];
  const allHandles = [
    ...Object.values(handles),
    ...Object.values(bezierHandles),
  ];
  for (const handle of allHandles) {
    const copy = copyHandle(handle);
    copy.position.x = (copy.position.x - padding) / width;
    copy.position.y = 1 - (copy.position.y - padding) / height;
    normalisedHandles.push(copy);
  }

  return normalisedHandles;
};
