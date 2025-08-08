import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import TailwindCSS from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),TailwindCSS()],
})
