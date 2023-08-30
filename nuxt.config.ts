import path from 'path'
import { NitroConfig } from 'nitropack'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      environment: process.env.NODE_ENV,
    },
  },
  hooks: {
    'nitro:config': (config: NitroConfig) => {
      // nitro の option 側に設定する場合、 scanDirs が nuxt 固有の設定を含んでしまうため、 mock モードではそれをここで上書きする
      if (isDevelopMode()) {
        const testServer = path.resolve(__dirname, 'tests/server')
        config.srcDir = testServer
        config.scanDirs = [testServer]
      }
    },
  },
})

/**
 * 開発モードであるかどうか
 * TODO: nuxt.config.ts から切り出す
 * TODO: ユニットテスト時のみ有効にする
 */
const isDevelopMode = () => process.env.NODE_ENV === 'development'
