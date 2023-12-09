import rss from '@astrojs/rss';
import { getPosts } from "../scripts/content_fetcher";

export async function GET(context) {
    const blogPosts = await getPosts()

    return rss({
      title: "LR Tech Blog",
      description: "Blog de tecnologia com conteúdo técnico sobre programação e software.",
      site: context.site,
      items: blogPosts.map(p => ({
        title: p.data.title,
        description: p.data.description,
        pubDate: p.data.date,
        link: `post/${p.slug}`,
      })),
    });
}