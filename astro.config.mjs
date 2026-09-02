import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://example.com',
  build: { inlineStylesheets: 'auto' },
  image: { service: { entrypoint: 'astro/assets/services/sharp' } }
});
