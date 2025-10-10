/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js'
  ],
  safelist: [
    'from-rose-500',
    'to-pink-500',
    'from-purple-500',
    'from-blue-500',
    'to-cyan-500',
    'from-amber-500',
    'to-orange-500',
    'bg-gradient-to-br',
    'bg-gradient-to-r'
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
