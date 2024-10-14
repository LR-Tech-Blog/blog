export interface PostImage {
    src: string,
    alt: string,
    href?: string | undefined,
}
export interface PostData {
    id: string,
    title: string,
    author: string,
    date: Date,
    draft: boolean,
    tags: string[],
    postType: string,
    description: string,
    image: PostImage
}