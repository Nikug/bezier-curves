import "./style.css";
import { initCanvas } from "./canvas";
import { setupListeners } from "./events";
import { updateText } from "./text";
import { getNormalisedHandles, initHandles } from "./state";

setupListeners();
initHandles();
initCanvas();
updateText(getNormalisedHandles());
