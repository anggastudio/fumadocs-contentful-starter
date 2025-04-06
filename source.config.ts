import {
	defineCollections,
	defineConfig,
	defineDocs,
	frontmatterSchema,
} from "fumadocs-mdx/config";
import { z } from "zod";

export const docs = defineDocs({
	dir: ["content/docs", "content/docs/*"],
});

export const blog = defineCollections({
	type: "doc",
	dir: "content/blog",
	async: true,
	schema: frontmatterSchema.extend({
		author: z.string(),
		date: z.string().date().or(z.date()).optional(),
	}),
});

export default defineConfig({
	lastModifiedTime: "git",
	mdxOptions: {
		rehypeCodeOptions: {
			lazy: true,
			experimentalJSEngine: true,
			langs: ["ts", "js", "html", "tsx", "mdx"],
			inline: "tailing-curly-colon",
			themes: {
				light: "catppuccin-latte",
				dark: "catppuccin-mocha",
			},
		},
	},
});
