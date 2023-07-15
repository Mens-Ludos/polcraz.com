/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('@polcraz/tailwind-preset'),
  ],
  content: [
    '../../packages/ui/components/**/*.{vue,js,ts,jsx,tsx}',
  ],
}
