import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import basicSsl from "@vitejs/plugin-basic-ssl"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),basicSsl()],
  resolve: {
    extensions: ['.js', '.jsx', 'ts', 'tsx'],
    alias: [
      {find: "@assets", replacement: "/src/assets"},
      {find: "@layout", replacement: "/src/layout"},
      {find: "@services", replacement: "/src/services"},
      {find: "@ui", replacement: "/src/ui"},
      {find: "@views", replacement: "/src/views"},
      {find: "@components", replacement: "/src/components"},
      {find: "@root", replacement: "/src"},
    ]
  },
  server: {
    port: 3000,
  },
  build: {
    cssCodeSplit: false
  }
})
