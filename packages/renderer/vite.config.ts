import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: __dirname,
  base: './',
  build: {
    outDir: '../../dist/renderer',
    emptyOutDir: true,
  },
  plugins: [react()],
})
