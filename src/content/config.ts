import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/data/posts" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.date(),
    draft: z.boolean(),
    tags: z.array(z.string()),
    postType: z.string(),
    description: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
      href: z.string().url().optional(),
    }),
  }),
});

export const collections = {
  posts: blogCollection,
};
