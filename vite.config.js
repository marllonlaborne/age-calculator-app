import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    open: './',
    port: 3434,
  },
  plugins: [react()],
})
