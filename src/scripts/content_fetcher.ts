import { type CollectionEntry, getCollection } from 'astro:content';

export async function getPosts(): Promise<CollectionEntry<'posts'>[]> {
    const posts = await getCollection("posts", ({ data }) => {
        return data.draft === false
    });

    return posts
}