import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/my_portfolio/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "@structure": "/src/components/Layout",
      "@components": "/src/components",
      "@hooks": "/src/hooks",
      "@assets": "/src/assets",
      "@icons": "/src/assets/icons",
      "@logos": "/src/assets/logos",
      "@publics": "/public/",
    },
  },
});
