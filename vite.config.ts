import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/style/main.scss";',
      },
    },
  },
  server: {
    host: "localhost",
    port: 8080,
    proxy: {
      "/api": {
        target: "https://mock.apifox.cn/m1/1705450-0-default",
        // 是否跨域
        changeOrigin: true,
        // 路径重写
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
