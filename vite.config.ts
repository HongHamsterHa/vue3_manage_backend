import { ConfigEnv, UserConfigExport, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { viteMockServe } from 'vite-plugin-mock'


export default defineConfig(({ command }) => {
  return {
    plugins: [vue(),
    viteMockServe({
      mockPath: 'mock',
      localEnabled: true
    })],
    resolve: {
      alias: {
        "@": path.resolve("./src")
      }
    },
    // scss 全局变量配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";'
        }
      }
    }
  }
}
)
