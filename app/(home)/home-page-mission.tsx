import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

const HomePageMission = () => {
  return (
			<section className="container p-8 mt-8 bg-white rounded-3xl">
				<div className="grid grid-cols-5 gap-4">
					<div className="flex flex-col justify-around col-span-5 md:col-span-3">
						<p className="font-thin text-black text-md">Mission</p>
						<h2 className="text-2xl text-brand md:text-3xl">
							Building a <span className="underline">Legacy of Quality</span>
						</h2>
						<h3 className="mt-6 text-sm leading-6 text-balance ">
							LR Projects is dedicated to redefining the standards of civil
							engineering through strategic development, meticulous execution,
							and an unwavering commitment to excellence. We strive to deliver
							infrastructure projects that not only meet the current needs of
							society but also anticipate and address the challenges of the
							future. Our mission is to build resilient, efficient, and
							sustainable environments, thereby enhancing the quality of life
							for communities and contributing to the broader economic
							landscape.
						</h3>
						<h3 className="mt-6 text-sm leading-6 text-balance ">
							In addition to our core civil engineering services, LR Projects
							also offers comprehensive plant hire solutions. We understand the
							importance of having access to reliable and well-maintained
							equipment for any construction project. Our extensive fleet of
							machinery includes excavators, graders, loaders, and more, all
							available for short-term or long-term hire. Our experienced team
							can assist you in selecting the right equipment for your specific
							needs and ensure it is delivered to your site on time and within
							budget. With LR Projects, you can focus on your construction
							project while we take care of the equipment.
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
							className="object-cover w-full h-full rounded-2xl"
						/>
					</div>
				</div>
			</section>
		);
};
export default HomePageMission;
