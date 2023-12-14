import { getPosts } from "./content_fetcher"

export async function getAllPostTypes(): Promise<string[]> {
    const posts = await getPosts()
    const postTypes = new Set(posts.map(post => post.data.postType))

    return Array.from(postTypes)
}