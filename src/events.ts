import { updateCanvas } from "./canvas";
import {
  bezierHandles,
  canvas,
  getNormalisedHandles,
  handles,
  height,
  initHandles,
  padding,
  pointHoveredWidth,
  pointWidth,
  width,
} from "./state";
import { updateText } from "./text";
import { clamp } from "./utils";

export const setupListeners = () => {
  mouseMoveSetup();
  resetButtonSetup();
};

const mouseMoveSetup = () => {
  canvas.addEventListener("mousemove", (event) => {
    const x = event.offsetX;
    const y = event.offsetY;
    const clampedX = clamp(x, padding, width + padding);
    const clampedY = clamp(y, padding, height + padding);
    const mouseDown = event.buttons === 1;
    let isDragging = false;

    for (const handleId in handles) {
      if (isDragging) break;
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
          isDragging = true;
        } else {
          handle.state = "hovering";
          handle.size = pointHoveredWidth;
        }
        break;
      } else {
        handle.state = "chilling";
        handle.size = pointWidth;
      }
    }

    for (const handleId in bezierHandles) {
      if (isDragging) break;
      const handle = bezierHandles[handleId];
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
        break;
      } else {
        handle.state = "chilling";
        handle.size = pointWidth;
      }
    }

    updateCanvas();
    updateText(getNormalisedHandles());
  });
};

const resetButtonSetup = () => {
  const resetButton = document.getElementById("reset") as HTMLButtonElement;
  resetButton.onclick = () => {
    initHandles();
    updateCanvas();
    updateText(getNormalisedHandles());
  };
};
