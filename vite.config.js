import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: '0.0.0.0',
    allowedHosts: ['all', '5173-ipl9pwunlfbgqnqdvvv9a-31f78d0c.manusvm.computer']
  },
  preview: {
    host: '0.0.0.0',
    allowedHosts: ['all', '4173-iobxmah01rl6b9z4snyt7-0a1239fc.manusvm.computer']
  }
})
