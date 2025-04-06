import { defineConfig, defineDocs } from "fumadocs-mdx/config";

export const docs = defineDocs({
	dir: ["content/docs", "content/docs/*"],
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
