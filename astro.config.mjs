import {defineConfig} from 'astro/config';

import tailwind from '@astrojs/tailwind';
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
    legacy: {
        // Example: Add support for legacy Markdown features
        astroFlavoredMarkdown: true
    },
    integrations: [tailwind(), image()],
    vite: {
        ssr: {
            external: ["svgo"],
        },
    },
});
