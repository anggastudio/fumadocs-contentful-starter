import Link from "next/link";
import { blog } from "@/lib/source";

export default function Page(): React.ReactElement {
	const posts = [...blog.getPages()].sort(
		(a, b) =>
			new Date(b.data.date ?? b.file.name).getTime() -
			new Date(a.data.date ?? a.file.name).getTime()
	);

	return (
		<main className="container max-sm:px-4 max-sm:py-4 lg:px-0 md:py-12">
			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{posts.map((post) => (
					<div className="border rounded-lg flex flex-col bg-fd-card p-4 transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground">
						<Link key={post.url} href={post.url}>
							<p className="font-medium">{post.data.title}</p>
							<p className="text-sm text-fd-muted-foreground">
								{post.data.description}
							</p>

							<p className="mt-auto pt-4 text-xs text-fd-muted-foreground">
								{new Date(post.data.date ?? post.file.name).toDateString()}
							</p>
						</Link>
					</div>
				))}
			</div>
		</main>
	);
}
