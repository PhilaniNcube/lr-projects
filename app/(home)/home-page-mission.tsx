import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

const HomePageMission = () => {
  return (
			<section className="container p-8 mt-8 bg-white rounded-3xl">
				<div className="grid grid-cols-5 gap-4">
					<div className="flex flex-col justify-around col-span-5 md:col-span-3">
						<p className="font-thin text-md">Mission</p>
						<h2 className="text-2xl md:text-3xl">
							Building a <span className="underline">Legacy of Quality</span>
						</h2>
						<h3 className="mt-6 text-md lg:text-lg leading-6 text-balance max-w-[50ch]">
							LR Projects is dedicated to redefining the standards of civil
							engineering through strategic development, meticulous execution,
							and an unwavering commitment to excellence. We strive to deliver
							infrastructure projects that not only meet the current needs of
							society but also anticipate and address the challenges of the
							future. Our mission is to build resilient, efficient, and
							sustainable environments, thereby enhancing the quality of life
							for communities and contributing to the broader economic landscape.
						</h3>
						<Button
							className="rounded-full w-28 h-28 border-zinc-500"
							variant="outline"
							type="button"
						>
							<Link href="/contact">
								<ArrowDownIcon className="w-8 h-8 animate-bounce" />
							</Link>
						</Button>
					</div>
					<div className="col-span-5 md:col-span-2">
						<Image
							src="/images/taxi-rank.webp"
							width={1000}
							height={1000}
							alt="Taxi Rank"
							loading="lazy"
							quality={80}
							className="object-cover w-full aspect-video md:aspect-square rounded-2xl"
						/>
					</div>
				</div>
			</section>
		);
};
export default HomePageMission;
