import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'three': ['three'],
          'three-fiber': ['@react-three/fiber'],
          'three-drei': ['@react-three/drei'],
          'framer-motion': ['framer-motion'],
        }
      }
    },
    chunkSizeWarningLimit: 1000,
  },
  assetsInclude: ['**/*.gltf', '**/*.bin'],
})
