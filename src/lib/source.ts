import { InferMetaType, InferPageType, loader } from "fumadocs-core/source";
import { createElement } from "react";
import { attachFile, createOpenAPI } from "fumadocs-openapi/server";
import { icons } from "lucide-react";
import { createMDXSource } from "fumadocs-mdx";
import { docs, blog as blogPosts } from "@/.source";

// `loader()` also assign a URL to your pages
// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
	baseUrl: "/docs",
	icon(icon) {
		if (icon && icon in icons)
			return createElement(icons[icon as keyof typeof icons]);
	},
	source: docs.toFumadocsSource(),
	pageTree: {
		attachFile,
	},
});

export const blog = loader({
	baseUrl: "/blog",
	source: createMDXSource(blogPosts),
});

export const openapi = createOpenAPI();

export type Page = InferPageType<typeof source>;
export type Meta = InferMetaType<typeof source>;
