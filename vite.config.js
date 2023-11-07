import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

console.log("Hello")
// https://vitejs.dev/config/
export default defineConfig({
  root: 'src',
  base: '',
  build: {
    outDir: '../dist',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [react()],
  esbuild: {
    loader: 'jsx',
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
})
