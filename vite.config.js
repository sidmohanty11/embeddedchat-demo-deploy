import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env
  },
  server: {
    port: process.env.PORT || 4000
  },
  plugins: [react()]
})
