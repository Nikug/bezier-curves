import { Handle } from "./types";

const text = document.getElementById("variables") as HTMLParagraphElement;

export const updateText = (handles: Handle[]) => {
  text.innerHTML = `
  <div>
    <p class="font-bold">Handles:</p>
    <div>
      ${handles
        .map((handle) => {
          const x = handle.position.x.toFixed(3);
          const y = handle.position.y.toFixed(3);
          return `<p>
              <span class="font-bold mr-2">${handle.id}</span> x: ${x}, y: ${y}
            </p>`;
        })
        .join("")}
    </div>
  </div>
  `;
};
