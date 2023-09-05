import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Additional options for Sass
      },
    },
  },
  publicDir: 'public', // Make sure you have a 'public' directory in your project
  resolve: {
    alias: {
      '@/assets': '/src/assets', // Alias for assets directory
    },
  },
})
