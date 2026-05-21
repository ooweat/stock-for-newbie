import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      '/exchange-api': {
        target:
          'https://api.frankfurter.app',

        changeOrigin: true,

        rewrite: (path) =>
          path.replace(
            /^\/exchange-api/,
            '',
          ),
      },
    },
  },
})
