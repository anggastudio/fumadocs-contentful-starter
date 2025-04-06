import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { InlineTOC } from "fumadocs-ui/components/inline-toc";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { blog } from "@/lib/source";
import { buttonVariants } from "@/components/ui/button";
import { File, Files, Folder } from "fumadocs-ui/components/files";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { createMetadata } from "@/lib/metadata";

export default async function Page(props: {
	params: Promise<{ slug: string }>;
}) {
	const params = await props.params;
	const page = blog.getPage([params.slug]);

	if (!page) notFound();
	const { body: Mdx, toc } = await page.data.load();

	return (
		<>
			<div
				className="container rounded-xl border mt-8 py-12 md:px-8"
				style={{
					backgroundColor: "black",
					backgroundImage: [
						"linear-gradient(140deg, hsla(274,94%,54%,0.3), transparent 50%)",
						"linear-gradient(to left top, hsla(260,90%,50%,0.8), transparent 50%)",
						"radial-gradient(circle at 100% 100%, hsla(240,100%,82%,1), hsla(240,40%,40%,1) 17%, hsla(240,40%,40%,0.5) 20%, transparent)",
					].join(", "),
					backgroundBlendMode: "difference, difference, normal",
				}}
			>
				<div>
					<p className="text-sm">
						{new Date(page.data.date ?? page.file.name).toDateString()}
					</p>
				</div>
				<h1 className="mt-2 mb-2 text-3xl font-bold text-white">
					{page.data.title}
				</h1>
				<p className="mb-4 text-white/80">{page.data.description}</p>
				<Link
					href="/blog"
					className={buttonVariants({ size: "sm", color: "secondary" })}
				>
					Back
				</Link>
			</div>
			<article className="container flex flex-col px-0 py-8 lg:flex-row lg:px-4">
				<div className="prose min-w-0 flex-1 p-4">
					<InlineTOC items={toc} />
					<Mdx
						components={{
							...defaultMdxComponents,
							File,
							Files,
							Folder,
							Tabs,
							Tab,
						}}
					/>
				</div>
				<div className="flex flex-col gap-4 border-l p-4 text-sm lg:w-[250px]">
					<h2>Sidebar</h2>
					<div>
						<p className="mb-1 text-sm text-fd-muted-foreground">Table of content should be here</p>
					</div>
				</div>
			</article>
		</>
	);
}

export async function generateMetadata(props: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const params = await props.params;
	const page = blog.getPage([params.slug]);

	if (!page) notFound();

	return createMetadata({
		title: page.data.title,
		description:
			page.data.description ?? "The library for building documentation sites",
	});
}

export function generateStaticParams(): { slug: string }[] {
	return blog.getPages().map((page) => ({
		slug: page.slugs[0],
	}));
}
