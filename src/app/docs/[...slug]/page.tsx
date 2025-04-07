import { source } from "@/lib/source";
import {
	DocsPage,
	DocsBody,
	DocsDescription,
	DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import defaultMdxComponents, { createRelativeLink } from "fumadocs-ui/mdx";
import { Popup, PopupContent, PopupTrigger } from "fumadocs-twoslash/ui";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { File, Files, Folder } from "fumadocs-ui/components/files";

export default async function Page(props: {
	params: Promise<{ slug?: string[] }>;
}) {
	const params = await props.params;
	const page = source.getPage(params.slug);
	if (!page) notFound();

	const MDXContent = page.data.body;
	return (
		<DocsPage
			toc={page.data.toc}
			full={page.data.full}
			tableOfContent={{
				style: "clerk",
			}}
			lastUpdate={page.data.lastModified}
		>
			<DocsTitle>{page.data.title}</DocsTitle>
			<DocsDescription>{page.data.description}</DocsDescription>
			<DocsBody>
				<MDXContent
					components={{
						...defaultMdxComponents,
						// this allows you to link to other pages with relative file paths
						a: createRelativeLink(source, page),
						// you can add other MDX components here
						File,
						Files,
						Folder,
						Tabs,
						Tab,
						Popup,
						PopupContent,
						PopupTrigger,
					}}
				/>
			</DocsBody>
		</DocsPage>
	);
}

export async function generateStaticParams() {
	return source.generateParams();
}

export async function generateMetadata(props: {
	params: Promise<{ slug?: string[] }>;
}) {
	const params = await props.params;
	const page = source.getPage(params.slug);
	if (!page) notFound();

	return {
		title: page.data.title,
		description: page.data.description,
	};
}
