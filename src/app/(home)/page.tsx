import { Building2, Github } from "lucide-react";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import Spot from "@/public/spot.png";

export default function HomePage() {
	return (
		<main className="flex flex-1 flex-col justify-center text-center">
			<div className="absolute inset-0 z-[-1] overflow-hidden duration-1000 animate-in fade-in [perspective:2000px]">
				<div
					className="absolute bottom-[20%] left-1/2 size-[1200px] origin-bottom bg-fd-primary/30 opacity-30"
					style={{
						transform: "rotateX(75deg) translate(-50%, 400px)",
						backgroundImage:
							"radial-gradient(50% 50% at center,transparent,var(--color-fd-background)), repeating-linear-gradient(to right,var(--color-fd-primary),var(--color-fd-primary) 1px,transparent 2px,transparent 100px), repeating-linear-gradient(to bottom,var(--color-fd-primary),var(--color-fd-primary) 2px,transparent 3px,transparent 100px)",
					}}
				/>
			</div>
			<div className="absolute inset-0 z-[-1] select-none overflow-hidden opacity-30">
				<Image
					alt="spot"
					src={Spot}
					sizes="100vw"
					className="size-full min-w-[800px] max-w-fd-container"
					priority
				/>
			</div>
			<h1 className="mb-4 text-2xl font-bold">
				This is The Home Page of My App Docs Website
			</h1>
			<p className="mb-8 text-fd-muted-foreground">
				You can open{" "}
				<Link
					href="/docs"
					className="text-fd-foreground font-semibold underline"
				>
					/docs
				</Link>{" "}
				and see the documentation.
			</p>
			<h2 className="mb-4 text-2xl font-bold">If you're using Fumadocs CLI</h2>
			<p className="mb-8 text-fd-muted-foreground">you will only get...</p>
			<p className="mb-4 text-fd-muted-foreground">
				That's why I created this starter. Get it here:
			</p>
			<div className="mb-8 mx-auto w-2xl grid grid-cols-1 gap-4 text-left">
				<Item href="https://github.com/fuma-nama/fumadocs">
					<div className="flex items-center gap-4">
						<Icon>
							<Github className="size-full" />
						</Icon>
						<h2 className="text-lg font-semibold">
							Fumadocs Contentful Starter
						</h2>
					</div>

					<p className="text-sm text-fd-muted-foreground">
						The fumadocs starter, but with content. It is easier to delete
						unused content than to create it from scratch. Menyala abangkuuh.
					</p>
				</Item>
			</div>
			<p className="mb-4 text-fd-muted-foreground">
				Although I'd be happier if Fuma could create a Contentful starter
				himself.
			</p>
			<p className="text-fd-muted-foreground">
				The rest of the Fumadocs documentation:
			</p>
			<div className="mx-auto w-2xl mt-4 grid grid-cols-1 gap-4 text-left">
				<Item href="https://github.com/fuma-nama/fumadocs">
					<div className="flex items-center gap-4">
						<Icon>
							<Building2 className="size-full" />
						</Icon>
						<h2 className="mb-2 text-lg font-semibold">Fumadocs</h2>
					</div>
					<p className="text-sm text-fd-muted-foreground">
						The full-powered documentation framework with an excellent UI.
					</p>
				</Item>
			</div>
		</main>
	);
}

function Icon({ children }: { children: React.ReactNode }): React.ReactElement {
	return (
		<div
			className="mb-2 size-9 rounded-lg border p-1.5 shadow-fd-primary/30"
			style={{
				boxShadow: "inset 0px 8px 8px 0px var(--tw-shadow-color)",
			}}
		>
			{children}
		</div>
	);
}

function Item(
	props: LinkProps & { children: React.ReactNode }
): React.ReactElement {
	return (
		<Link
			{...props}
			className="rounded-2xl border border-transparent p-6 shadow-lg"
			style={{
				backgroundImage:
					"linear-gradient(to right bottom, var(--color-fd-background) 10%, var(--color-fd-accent), var(--color-fd-background) 60%)," +
					"linear-gradient(to right bottom, rgb(40,40,40) 10%, rgb(180,180,180), rgb(30,30,30) 60%)",
				backgroundOrigin: "border-box",
				backgroundClip: "padding-box, border-box",
			}}
		>
			{props.children}
		</Link>
	);
}
