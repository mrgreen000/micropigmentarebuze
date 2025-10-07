/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef5f3',
          100: '#fde8e4',
          200: '#fbd5ce',
          300: '#f8b8ab',
          400: '#f3907a',
          500: '#ea6a4e',
          600: '#d74e30',
          700: '#b43f26',
          800: '#953724',
          900: '#7c3324',
          950: '#43180e',
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('flowbite-typography')
  ],
}
