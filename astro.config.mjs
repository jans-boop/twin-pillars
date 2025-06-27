import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";
import { defineConfig } from 'astro/config';
// https://astro.build/config
export default defineConfig({
  site: 'https://jans-boop.github.io',
  base: '/twin-pillars',
  output: 'static'
});
