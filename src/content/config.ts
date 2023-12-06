import { z, defineCollection, reference } from "astro:content";

const blogCollection = defineCollection({
    type: "content",
    schema: z.object({
        id: z.string(),
        title: z.string(),
        author: reference("authors"),
        date: z.date(),
        draft: z.boolean(),
        tags: z.array(z.string()),
        postType: z.string(),
        description: z.string(),
        image: z.object({
            src: z.string(),
            alt: z.string()
        })
    })
})

const authorProfile = defineCollection({
    type: "data",
    schema: z.object({
        name: z.string(),
        age: z.number(),
        email: z.string(),
        linkedin: z.string().url(),
        github: z.string().url(),
        profileImageUrl: z.string().url().nullable(),
        profileImageAlt: z.string().nullable(),
        profileImageType: z.enum(["URL", "Gravatar"]),
        stack: z.array(z.object({
            name: z.string(),
            iconName: z.string(),
            iconColor: z.string(),
        })),
    })
})

const authorDescription = defineCollection({
    type: "content",
    schema: z.object({
        author: reference("authors")
    })
})

export const collections = {
    'posts': blogCollection,
    'authors': authorProfile,
    'authorsDescription': authorDescription
}