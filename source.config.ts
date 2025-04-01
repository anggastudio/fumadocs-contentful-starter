import { defineDocs, defineConfig } from 'fumadocs-mdx/config';

export const docs = defineDocs({
	dir: ["content/docs", "content/docs/*"],
});

export default defineConfig({
	mdxOptions: {
		// MDX options
	},
	lastModifiedTime: "git",
});
