// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  server: {
    port: 6200
  },
  // Uncomment and update the following for GitHub Pages deployment:
  // site: 'https://yourusername.github.io',
  // base: '/your-repo-name',
});
