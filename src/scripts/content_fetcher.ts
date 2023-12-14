import { type CollectionEntry, getCollection } from 'astro:content';

export async function getPosts(): Promise<CollectionEntry<'posts'>[]> {
    const posts = await getCollection("posts", ({ data }) => {
        return data.draft === false
    })
    posts.sort((p1, p2) => p2.data.date.valueOf() - p1.data.date.valueOf())

    return posts
}

export async function getPostsByType(postType: string): Promise<CollectionEntry<'posts'>[]> {
    const posts = await getPosts()
    return posts.filter(post => post.data.postType === postType)
}