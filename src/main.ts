import "./style.css";
import { initCanvas } from "./canvas";
import { setupListeners } from "./events";

const text = document.getElementById("variables") as HTMLParagraphElement;
initCanvas();
setupListeners();
