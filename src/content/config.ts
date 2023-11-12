import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        author: z.string(),
        date: z.date(),
        draft: z.boolean(),
        image: z.object({
            src: z.string(),
            alt: z.string()
        })
    })
})

export const collections = {
    'posts': blogCollection
}