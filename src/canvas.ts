import { colors } from "./colors";
import {
  canvas,
  width,
  height,
  lines,
  padding,
  handles,
  bezierHandles,
  bezierResolution,
} from "./state";
import { Handle, Vector2 } from "./types";
import { bezierCubic } from "./utils";
const context = canvas.getContext("2d")!;

export const initCanvas = () => {
  updateCanvas();
};

export const updateCanvas = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  createGrid();
  drawBezierHandles();
  drawHandles();
};

const createGrid = () => {
  const widthStep = width / lines;
  const heightStep = height / lines;

  context.strokeStyle = colors["light-gray"];
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
  // drawLineBetweenHandles();
  drawBezierCurveBetweenHandles();
  for (const handle of Object.values(handles)) {
    drawPoint(handle, colors.blue);
  }
};

const drawBezierHandles = () => {
  for (const handleId in bezierHandles) {
    drawDashedLine(
      bezierHandles[handleId].position,
      handles[handleId].position,
    );
    drawPoint(bezierHandles[handleId], colors.pink);
  }
};

const drawDashedLine = (a: Vector2, b: Vector2) => {
  context.beginPath();
  context.strokeStyle = colors.gray;
  context.setLineDash([10]);
  context.lineWidth = 4;
  context.moveTo(a.x, a.y);
  context.lineTo(b.x, b.y);
  context.stroke();
  context.closePath();
  context.setLineDash([]);
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

const drawBezierCurveBetweenHandles = () => {
  context.beginPath();
  context.strokeStyle = colors.blue;
  context.lineWidth = 4;
  context.moveTo(handles[0].position.x, handles[0].position.y);
  for (let i = 0; i < bezierResolution; ++i) {
    const step = i / bezierResolution;
    const position = bezierCubic(
      handles[0].position,
      bezierHandles[0].position,
      bezierHandles[1].position,
      handles[1].position,
      step,
    );

    context.lineTo(position.x, position.y);
  }
  context.lineTo(handles[1].position.x, handles[1].position.y);
  context.stroke();
  context.closePath();
};

const drawPoint = (handle: Handle, color: string) => {
  context.beginPath();
  context.strokeStyle = color;
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
