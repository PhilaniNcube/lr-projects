"use client";

import Image from "next/image";
import { Context, ReactNode, useRef } from "react";
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";
import  useIsomorphicLayoutEffect  from "../../lib/isomorphicEffect";
import { usePathname } from "next/navigation";



if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger, useGSAP);
}



const services = [
	{
		title: "Civil Engineering Construction",
		description:
			"We specialise in the development and maintenance of essential infrastructure, ensuring durability, functionality, and sustainability in each project",
		items: [
			"Sewers",
			"Water Reticulation",
			"Roads",
			"Reinforced Concrete Structures",
			"Stormwater Drainage",
		],
		image: "/images/civil-engineering.jpeg",
	},
	{
		title: "General Building Construction",
		description:
			"LR Projects’ building services encompass a diverse array of projects, each executed with an unwavering commitment to quality and durability",
		items: [
			"Repairs & Renovations",
			"Commercial Buildings",
			"Residential Buildings",
			"Industrial Buildings",
			"Boundary Walls & Fencing",
		],
		image: "/images/building-services.jpeg",
	},
	{
		title: "Plant Hiring Services",
		description:
			"LR Projects offers a range of plant hire services to meet the needs of our clients, ensuring that each project is completed efficiently and effectively",
		items: [
			"Tipper Trucks",
			"TLBs",
			"Water Tanker Trucks",
			"Drum Rollers",
			"Excavators",
			"Graders",
		],
		image: "/images/plant.jpeg",
	},
];

const AnimatedSection = () => {

        const pathname = usePathname();

				const container = useRef(null);

				const servicesRef = useRef<HTMLDivElement[]>([]);

				const addToRefs = (el: HTMLDivElement) => {
					if (el && !servicesRef.current.includes(el)) {
						servicesRef.current.push(el);
					}
				};

				useGSAP(
					() => {


						const cards = servicesRef.current;
						console.log({ cards });

						cards.forEach((card, index) => {
							gsap.from(card, {
								opacity: 0,
								y: 100,
								duration: 1,
								scrollTrigger: {
									trigger: card,
									start: "top 90%",
									end: "bottom 10%",
									toggleActions: "play none none reverse",

								},
							});
						});
					},
					{ dependencies: [pathname], scope: container, revertOnUpdate: true },
				);

				return (
					<section
						ref={container}
						className="container p-0 mt-8 mb-4 overflow-clip"
					>
						<h2 className="mb-4 text-3xl text-brand lg:text-5xl">
							Our Focus Areas
						</h2>
						<div className="relative flex gap-x-8" id="services">
							<div className="relative flex flex-col items-center w-full min-h-screen p-0 cards gap-y-6 left">
								{services.map((service, index) => (
									<div
										ref={addToRefs}
										key={service.title}
										className={cn(
											"relative grid grid-cols-2 p-8 bg-white card rounded-3xl w-full shadow-2xl border border-slate-300 ",
										)}
									>
										<div className="col-span-2 pr-3 lg:col-span-1">
											<h3 className="mb-4 text-2xl font-medium lg:text-4xl text-zinc-950">
												{service.title}
											</h3>
                      <p className="mb-4 text-lg leading-5 text-brand text-balance">{service.description}</p>
											<ul className="pl-8 font-thin list-disc">
												{service.items.map((item) => (
													<li key={item} className="text-lg text-zinc-700">
														{item}
													</li>
												))}
											</ul>
										</div>
										<Image
											src={service.image}
											alt={service.title}
											className="object-cover h-[350px] w-full col-span-2 rounded-3xl lg:col-span-1"
											width={1279}
											height={853}
										/>
									</div>
								))}
							</div>
						</div>
					</section>
				);
};
export default AnimatedSection;
