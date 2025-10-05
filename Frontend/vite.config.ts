import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
  },
    test: {
        globals: true,
        environment: 'jsdom', // Node.js環境でDOMをシミュレートする
        setupFiles: './src/setupTests.ts',
        coverage: {
          provider: 'v8', // 'v8' または 'istanbul'
          reporter: ['text', 'json', 'html'], // レポート形式
          reportsDirectory: './coverage',          // レポート出力先
          include: ['src/**/*.{ts,tsx}'],
          exclude: [
            'src/main.tsx', // エントリーポイント
            'src/vite-env.d.ts',
            'src/**/types.ts', // 型定義ファイル
            '**/*.config.ts',
            '**/node_modules/**',
          ],          
        },
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
