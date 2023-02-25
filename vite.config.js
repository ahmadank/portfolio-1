import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      Pass: "three/examples/jsm/postprocessing/Pass.js",
      DigitalGlitch: "three/examples/jsm/shaders/DigitalGlitch.js",
    },
  },
});
