import { colors } from "./colors";
import { canvas, width, height, lines, padding, handles } from "./state";
import { Handle } from "./types";
const context = canvas.getContext("2d")!;

export const initCanvas = () => {
  updateCanvas();
};

export const updateCanvas = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  createGrid();
  drawHandles();
};

const createGrid = () => {
  const widthStep = width / lines;
  const heightStep = height / lines;

  context.strokeStyle = colors.gray;
  context.lineWidth = 2;

  context.beginPath();
  for (let step = 0; step <= lines; step++) {
    context.moveTo(step * widthStep + padding, padding);
    context.lineTo(step * widthStep + padding, height + padding);
  }

  for (let step = 0; step <= lines; step++) {
    context.moveTo(padding, step * heightStep + padding);
    context.lineTo(width + padding, step * heightStep + padding);
  }

  context.moveTo(padding, height + padding);
  context.lineTo(width + padding, padding);

  context.stroke();
  context.closePath();
};

const drawHandles = () => {
  drawLineBetweenHandles();
  for (const handle of Object.values(handles)) {
    drawPoint(handle);
  }
};

const drawLineBetweenHandles = () => {
  context.beginPath();
  context.strokeStyle = colors.blue;
  context.lineWidth = 4;
  context.moveTo(handles[0].position.x, handles[0].position.y);
  context.lineTo(handles[1].position.x, handles[1].position.y);
  context.stroke();
  context.closePath();
};

const drawPoint = (handle: Handle) => {
  context.beginPath();
  context.strokeStyle = colors.blue;
  context.lineWidth = 4;
  context.fillStyle = colors.white;

  context.roundRect(
    handle.position.x - handle.size / 2,
    handle.position.y - handle.size / 2,
    handle.size,
    handle.size,
    90,
  );

  context.stroke();
  context.fill();
  context.closePath();
};
