import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const blogPosts = await getCollection("posts")

    return rss({
      title: "LR Tech Blog",
      description: "⚡ ",
      site: context.site,
      stylesheet: "/rss/style.xsl",
      items: blogPosts.map(p => ({
        title: p.data.title,
        description: p.data.description,
        pubDate: p.data.date,
        link: `post/${p.slug}`,
      })),
    });
}