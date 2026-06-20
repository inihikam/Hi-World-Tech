import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflareAdapter from '@astrojs/cloudflare';

export default defineConfig({
  output: 'static',
  integrations: [tailwind()],
  adapter: cloudflareAdapter(),
  site: 'https://hiworld.tech',
  build: {
    inlineStylesheets: 'auto'
  }
});
