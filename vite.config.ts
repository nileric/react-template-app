/// <reference types="vitest" />
/// <reference types="vite/client" />

import path from "path"
import {defineConfig} from "vite"
import react from "@vitejs/plugin-react"
import eslint from "vite-plugin-eslint"
import i18nextLoader from "vite-plugin-i18next-loader"
import tsconfigPaths from "vite-tsconfig-paths"
import {splitVendorChunkPlugin} from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    i18nextLoader({
      namespaceResolution: "basename",
      paths: [path.resolve(__dirname, "./src/locales")],
    }),
    eslint({
      failOnWarning: true,
    }),
    tsconfigPaths(),
  ],
  build: {
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
})
