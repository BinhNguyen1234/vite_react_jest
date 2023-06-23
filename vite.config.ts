import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),vue()],
  resolve: {
    extensions: ['.js', '.jsx', 'ts', 'tsx','.vue'],
    alias: [
      {find: "@assets", replacement: "/src/assets"},
      {find: "@layout", replacement: "/src/layout"},
      {find: "@services", replacement: "/src/services"},
      {find: "@ui", replacement: "/src/ui"},
      {find: "@views", replacement: "/src/views"},
      {find: "@test", replacement: "/src/test"},
    ]
  },
  server: {
    port: 3000,
  }
})
