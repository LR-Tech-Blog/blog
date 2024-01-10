import type { MarkdownHeading } from "astro";
import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export interface RemarkFrontmatter {
    minutesRead: string
}

export interface RenderablePostData {
    Content: AstroComponentFactory;
    headings: MarkdownHeading[];
    remarkPluginFrontmatter: Record<string, any>;
}

export interface RenderPostData {
    headings: MarkdownHeading[];
    remarkPluginFrontmatter: RemarkFrontmatter;
}