import { getCollection } from "astro:content"
import { getPosts } from "./content_fetcher"
import { POSTS_PER_PAGE } from "./consts"

export async function getAllPostTypes(): Promise<string[]> {
    const posts = await getPosts()
    const postTypes = new Set(posts.map(post => post.data.postType))

    return Array.from(postTypes)
}

export async function getPageCount(): Promise<number> {
    const posts = await getCollection("posts")
    const pageCount = Math.ceil(posts.length / POSTS_PER_PAGE)

    return pageCount
}