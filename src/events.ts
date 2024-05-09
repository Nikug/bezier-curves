import { updateCanvas } from "./canvas";
import {
  canvas,
  handles,
  height,
  padding,
  pointHoveredWidth,
  pointWidth,
  width,
} from "./state";
import { clamp } from "./utils";

export const setupListeners = () => {
  mouseMoveSetup();
};

const mouseMoveSetup = () => {
  canvas.addEventListener("mousemove", (event) => {
    const x = event.offsetX;
    const y = event.offsetY;
    const clampedX = clamp(x, padding, width + padding);
    const clampedY = clamp(y, padding, height + padding);
    const mouseDown = event.buttons === 1;

    for (const handleId in handles) {
      const handle = handles[handleId];
      const distanceToHandle = Math.hypot(
        x - handle.position.x,
        y - handle.position.y,
      );

      if (distanceToHandle < handle.size / 2 || handle.state === "dragging") {
        if (mouseDown) {
          handle.state = "dragging";
          handle.size = pointHoveredWidth;
          handle.position.x = clampedX;
          handle.position.y = clampedY;
        } else {
          handle.state = "hovering";
          handle.size = pointHoveredWidth;
        }
      } else {
        handle.state = "chilling";
        handle.size = pointWidth;
      }
    }

    updateCanvas();
  });
};
