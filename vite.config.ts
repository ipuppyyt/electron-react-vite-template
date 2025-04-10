import { logger, ravyn } from './electron/modules'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  logLevel: 'silent',
  customLogger: logger,
  server: {
    port: 8181,
  },
  plugins: [react(), tailwindcss(), ravyn()],
  // DO NOT TOUCH ANYTHING ABOVE THIS LINE

  base: './',
  build: {
    outDir: 'dist/electron/renderer',
    emptyOutDir: true,
    target: 'esnext',
    minify: false
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
