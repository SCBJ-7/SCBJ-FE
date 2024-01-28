/// <reference types="vitest" />

import react from '@vitejs/plugin-react'
import path from 'path'
import {defineConfig} from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/unitTestsSrc/setup.ts",
    dir: "./tests/unitTestsSrc",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@apis": path.resolve(__dirname, "./src/apis"),
      "@mocks": path.resolve(__dirname, "./src/mocks"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@type": path.resolve(__dirname, "./src/types"),
      "@store": path.resolve(__dirname, "./src/store"),
    },
  },
});
