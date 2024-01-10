import type { CollectionEntry } from "astro:content";
import type { RenderablePostData, RenderPostData } from "./types/render_post_data";

type PostRender = {
    renderablePost: RenderablePostData
    renderPostData: RenderPostData
}

export async function renderPostContent(post: CollectionEntry<'posts'>): Promise<PostRender> {
    const renderableData: RenderablePostData = await post.render()
    const renderData: RenderPostData = {
        headings: renderableData.headings,
        remarkPluginFrontmatter: {
            minutesRead: renderableData.remarkPluginFrontmatter.minutesRead
        }
    }
    return {
        renderablePost: renderableData,
        renderPostData: renderData
    }
}