import { defineConfig } from 'astro/config';
import embeds from 'astro-embed/integration';

// https://astro.build/config
export default defineConfig({
    integrations: [embeds()],
});
