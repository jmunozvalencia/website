import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  legacy: {
    // Example: Add support for legacy Markdown features
    astroFlavoredMarkdown: true,
  },
});
