import DefaultTheme from 'vitepress/theme'
import MyButton from '@polcraz/ui/components/Button.vue'
import '@polcraz/tailwind-preset/globals.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('MyButton', MyButton)
  },
}
