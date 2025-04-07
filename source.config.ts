import {
	defineCollections,
	defineConfig,
	defineDocs,
	frontmatterSchema,
} from "fumadocs-mdx/config";
import { transformerTwoslash } from "fumadocs-twoslash";
import { rehypeCodeDefaultOptions } from "fumadocs-core/mdx-plugins";
import { remarkInstall } from "fumadocs-docgen";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
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
				light: "github-light",
				dark: "github-dark",
			},
			transformers: [
				...(rehypeCodeDefaultOptions.transformers ?? []),
				transformerTwoslash(),
			],
		},
		remarkPlugins: [remarkMath, remarkInstall],
		rehypePlugins: (v) => [rehypeKatex, ...v],
	},
});
