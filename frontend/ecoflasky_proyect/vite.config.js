import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Este es el contenido correcto
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:4000',
    },
  },
})
