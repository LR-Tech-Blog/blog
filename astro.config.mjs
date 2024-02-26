import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import getReadTime from './src/scripts/reading_time';

import vercel from "@astrojs/vercel/serverless";
import icon from "astro-icon";

export default defineConfig({
  integrations: [tailwind(), mdx(), icon({
    include: {
      simple_icons: ["*"]
    }
  })],
  site: "https://lrtechblog.vercel.app",
  output: "hybrid",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    speedInsights: {
      enabled: true
    }
  }),
  markdown: {
    remarkPlugins: [getReadTime]
  }
});