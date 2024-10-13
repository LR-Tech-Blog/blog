import { file, glob } from "astro/loaders";
import { z, defineCollection, reference } from "astro:content";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/data/posts" }),
  schema: z.object({
    title: z.string(),
    author: reference("authors"),
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

const authorProfile = defineCollection({
  loader: file("./src/data/authors.json"),
  schema: z.object({
    name: z.string(),
    age: z.number(),
    email: z.string(),
    linkedin: z.string().url(),
    github: z.string().url(),
    profileImageUrl: z.string().url().nullable(),
    profileImageAlt: z.string().nullable(),
    profileImageType: z.enum(["URL", "Gravatar"]),
    stack: z.array(
      z.object({
        name: z.string(),
        iconName: z.string(),
        iconColor: z.string(),
      })
    ),
  }),
});

const authorDescription = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/data/authorsDescription" }),
  schema: z.object({
    author: reference("authors"),
  }),
});

export const collections = {
  posts: blogCollection,
  authors: authorProfile,
  authorsDescription: authorDescription,
};
