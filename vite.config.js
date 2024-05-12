import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

// const path = require("path");
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4000,
  },
  test: {
    global: true,
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router"],
    }),
    Components(),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
