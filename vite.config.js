// Import Vite configuration and plugins
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Configure Vite for GitHub Pages deployment
export default defineConfig({
  base: "/mayerfeld-bookstore/",

  plugins: [react(), tailwindcss()],
});
