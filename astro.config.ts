import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import { THEME_CONFIG } from "./src/theme.config";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: THEME_CONFIG.website,
  server: { port: 3000, host: true },
  prefetch: true,
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
      langs: [],
      wrap: true,
    },
  },
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    robotsTxt(),
    sitemap(),
  ],
});
