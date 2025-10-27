import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        id: "/guess-the-grade-react/",
        name: "Guess the Grade",
        short_name: "GuessGrade",
        start_url: ".",
        display: "standalone",
        background_color: "oklch(0.13 0.028 261.692)",
        icons: [
          {
            src: "/guess-the-grade-react/icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/guess-the-grade-react/icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  base: "/guess-the-grade-react",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
