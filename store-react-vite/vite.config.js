import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Change this to our Front end port
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, "")
      },
      "/api/express": {
        target: "http://localhost:4000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/express/, ""),
      },
    },
  },
});
