import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/embeddedchat-demo-deploy/',
  define: {
    'process.env': process.env
  },
  server: {
    port: process.env.PORT || 4000
  },
  plugins: [react()]
})
