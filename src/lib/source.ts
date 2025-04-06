import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { createElement } from "react";
import { icons } from "lucide-react";

// `loader()` also assign a URL to your pages
// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
	baseUrl: "/docs",
	icon(icon) {
		if (icon && icon in icons)
			return createElement(icons[icon as keyof typeof icons]);
	},
	source: docs.toFumadocsSource(),
});

