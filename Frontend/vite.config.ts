import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom', // Node.js環境でDOMをシミュレートする
        setupFiles: './src/setupTests.ts',
    },
    server: {
        proxy: {
          // '/api' という文字列で始まるリクエストをプロキシの対象にする
          '/api': {
            // 転送先のホストを指定
            target: 'http://localhost:8080',
            // オリジンを偽装してCORSエラーを回避
            changeOrigin: true,
          },
      },
    },
})
