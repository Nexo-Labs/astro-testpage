import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  // Replace 'username' with your GitHub username and 'reponame' with your repository name
  site: 'https://ruben.github.io',
  base: '/astro-tailwind-ghpages',
});
