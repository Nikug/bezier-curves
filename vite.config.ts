import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/bezier-curves/",
  plugins: [tailwindcss()],
});
