// @ts-check
//commented-import { defineConfig } from 'astro/config';

// https://astro.build/config
//commented-export default defineConfig({});

import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://Benett-design.github.io/portfolio',
  base: '/portfolio/',
  outDir: './docs',   // output static files here
});

