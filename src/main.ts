import "./style.css";
import { initCanvas } from "./canvas";
import { setupListeners } from "./events";
import { updateText } from "./text";
import { getNormalisedHandles, initHandles } from "./state";

initHandles();
initCanvas();
updateText(getNormalisedHandles());
setupListeners();
