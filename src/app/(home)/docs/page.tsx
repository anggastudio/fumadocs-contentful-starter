import {
	Building2,
	LibraryIcon,
	Github,
	CalendarCheck,
	CalendarCheck2,
	CalendarX,
} from "lucide-react";
import Link, { type LinkProps } from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Spot from "public/spot.png";

export default function DocsPage(): React.ReactElement {
	return (
		<main className="flex flex-col justify-center items-center py-16 text-center z-[2]">
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
			<h1 className="mb-4 text-4xl font-semibold md:text-5xl">
				Getting Started
			</h1>
			<p className="text-fd-muted-foreground">
				Choose the version of the documentation you want to read:
			</p>
			<div className="m-16 mx-auto w-2xl grid grid-cols-2 gap-4 text-left">
				<Item href="/docs/4.x">
					<div className="flex items-center gap-4">
						<Icon>
							<CalendarCheck className="size-full text-green-600" />
						</Icon>
						<h2 className="text-lg font-semibold text-green-600">
							Version 4.x (Latest)
						</h2>
					</div>

					<p className="text-sm text-fd-muted-foreground">
						This is documentation for the latest version of My App
					</p>
					<p className="mt-2 text-xs text-fd-muted-foreground">
						Release date: 5 April 2025
					</p>
				</Item>
				<Item href="/docs/3.x">
					<div className="flex items-center gap-4">
						<Icon>
							<CalendarCheck2 className="size-full" />
						</Icon>
						<h2 className="text-lg font-semibold">Version 3.x</h2>
					</div>

					<p className="text-sm text-fd-muted-foreground">
						Not the latest, but still recent and actively maintained
					</p>
					<p className="mt-2 text-xs text-fd-muted-foreground">
						Release date: 2 Feb 2024
					</p>
				</Item>
				<Item href="/docs/2.x">
					<div className="flex items-center gap-4">
						<Icon>
							<CalendarCheck2 className="size-full" />
						</Icon>
						<h2 className="text-lg font-semibold">Version 2.x</h2>
					</div>

					<p className="text-sm text-fd-muted-foreground">
						Still good, still supported, but better upgrade
					</p>
					<p className="mt-2 text-xs text-fd-muted-foreground">
						Release date: 15 Jan 2023
					</p>
				</Item>
				<Item href="/docs/1.x">
					<div className="flex items-center gap-4">
						<Icon>
							<CalendarX className="size-full text-red-600" />
						</Icon>
						<h2 className="text-lg font-semibold text-red-600">Version 1.x</h2>
					</div>

					<p className="text-sm text-fd-muted-foreground">
						Obsolette, not maintained, avoid using this version
					</p>
					<p className="mt-2 text-xs text-fd-muted-foreground">
						Release date: 3 May 2021
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
