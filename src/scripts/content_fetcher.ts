import { type CollectionEntry, getCollection } from "astro:content";
import { POSTS_PER_PAGE } from "./consts";

export type FilterCallback = (post: CollectionEntry<"posts">) => boolean;
const defaultFilter = function (entry: CollectionEntry<"posts">) {
  return entry.data.draft === false;
};

export async function getPosts(
  filter?: FilterCallback
): Promise<CollectionEntry<"posts">[]> {
  const posts = await getCollection("posts", filter || defaultFilter);
  posts.sort((p1, p2) => p2.data.date.valueOf() - p1.data.date.valueOf());

  return posts;
}

export async function getPostsByType(
  postType: string
): Promise<CollectionEntry<"posts">[]> {
  const posts = await getPosts();
  return posts.filter((post) => post.data.postType === postType);
}

export async function getPostsWithTag(
  tag: string
): Promise<CollectionEntry<"posts">[]> {
  if (tag.trim().length == 0) {
    return [];
  }

  const posts = await getPosts();
  return posts.filter((post) => post.data.tags.includes(tag));
}

export async function getPostsFromPage(
  page: number
): Promise<CollectionEntry<"posts">[]> {
  const skip = (page - 1) * POSTS_PER_PAGE;
  const firstPage = skip === 0
  let postsSkiped = 0
  let postsTaked = 0

  const pagePosts = await getPosts(({ data }) => {
    if(data.draft || (!firstPage && postsSkiped <= skip)) {
      postsSkiped++
      return false
    }

    if(postsTaked < POSTS_PER_PAGE) {
      return true
    }

    return false
  });

  return pagePosts.slice(0, POSTS_PER_PAGE);
}
