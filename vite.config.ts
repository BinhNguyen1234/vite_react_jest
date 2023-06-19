import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', 'ts', 'tsx'],
    alias: [
      {find: "@assets", replacement: "/src/assets"},
      {find: "@layout", replacement: "/src/layout"},
      {find: "@services", replacement: "/src/services"},
      {find: "@ui", replacement: "/src/ui"},
      {find: "@views", replacement: "/src/views"},
    ]
  },
  server: {
    port: 3000,
  }
})
