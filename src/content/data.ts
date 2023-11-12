export interface PostImage {
    src: string,
    alt: string
}
export interface PostData {
    title: string,
    author: string,
    date: Date,
    draft: boolean
    image: PostImage
}