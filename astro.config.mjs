// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  server: {
    port: 6200
  },
  site: 'https://mrgreen000.github.io',
  base: '/micropigmentarebuze',
});
