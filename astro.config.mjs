// @ts-check
import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import sitemap from '@astrojs/sitemap';
import Icons from 'unplugin-icons/vite'

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), sitemap()],
  output: 'static',
  site: 'https://fusetim.github.io',
  base: `/uii/`,
  scopedStyleStrategy: 'class',
  vite: {
    plugins: [
      Icons({
        compiler: 'astro',
      }),
    ],
  }
});