import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import getReadTime from "./src/scripts/reading_time";
import vercel from "@astrojs/vercel/serverless";
import icon from "astro-icon";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
    icon({
      include: {
        simple_icons: ["*"],
      },
    }),
    react(),
  ],
  site: "https://blog.luanroger.dev",
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  markdown: {
    remarkPlugins: [getReadTime],
  },
});
