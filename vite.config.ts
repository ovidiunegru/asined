import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'your-repo-name' with the actual repository name
export default defineConfig({
  base: '/asined/',
  plugins: [react()],
})
