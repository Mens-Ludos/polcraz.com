// https://v3.nuxtjs.org/api/configuration/nuxt.config
import Components from 'unplugin-vue-components/vite'
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers'
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@polcraz/ui',
  ],
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment,@typescript-eslint/prefer-ts-expect-error
  // @ts-ignore
  tailwindcss: {
    cssPath: '@polcraz/tailwind-preset/globals.css',
  },
  vite: {
    plugins: [
      Components({ resolvers: [HeadlessUiResolver()] }),
    ],
  },
  nitro: {
    preset: 'vercel',
  },
})
