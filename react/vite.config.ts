import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  publicDir: './public',     // Keep public dir relative to react folder
  build: {
    outDir: '../',           // Build to parent directory (GitHub Pages root)
    emptyOutDir: false,      // Don't delete existing GitHub Pages files
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // Ensure clean asset naming
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
  }
})
