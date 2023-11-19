export interface PostImage {
    src: string,
    alt: string
}
export interface PostData {
    title: string,
    author: any,
    date: Date,
    draft: boolean,
    tags: string[],
    postType: string,
    description: string,
    image: PostImage
}

export enum AuthorProfileImageType {
    URL = "URL",
    Gravatar = "Gravatar",
}
export interface AuthorProfileStack {
    name: string,
    iconName: string,
    iconColor: string
}
export interface AuthorProfile {
    name: string,
    age: number,
    email: string,
    linkedin: string,
    github: string,
    profileImageUrl: string | null,
    profileImageAlt: string | null,
    profileImageType: string,
    stack: AuthorProfileStack[],
}
export interface AuthorDescription {
    author: any
}