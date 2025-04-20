import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import relativeLinks from "astro-relative-links";
import react from "@astrojs/react";

export default defineConfig({
	site: 'https://nexo-labs.github.io/',
	base: '/astro-testpage/',
	integrations: [tailwind(), relativeLinks(), react()],
	output: "static"
  });