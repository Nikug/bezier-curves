const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const context = canvas.getContext("2d")!;

export const setupCanvas = () => {
  createGrid();
};

const createGrid = () => {
  const lines = 10;
  const width = canvas.width;
  const height = canvas.height;

  const widthStep = width / lines;
  const heightStep = height / lines;

  context.strokeStyle = "#cbd5e1";
  context.lineWidth = 2;

  context.beginPath();
  for (let step = 1; step < lines; step++) {
    context.moveTo(step * widthStep, 0);
    context.lineTo(step * widthStep, height);
  }

  for (let step = 1; step < lines; step++) {
    context.moveTo(0, step * heightStep);
    context.lineTo(width, step * heightStep);
  }

  context.moveTo(0, height);
  context.lineTo(width, 0);

  context.stroke();
  context.closePath();
};
