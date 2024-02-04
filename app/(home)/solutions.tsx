"use client"

import { Button } from "@/components/ui/button";
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRef } from "react";


if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger, useGSAP);
}


const Solutions = () => {

  const solutionsRef = useRef<HTMLTableSectionElement | null>(null);

  		useGSAP(
					() => {

            const tl = gsap.timeline();

						const solution = solutionsRef.current;

            if (solution) {
              tl.from(".title", {
															opacity: 0,
															x: 300,
															duration: 2,
															ease: "power4.out",
															scrollTrigger: {
																trigger: solution,
																start: "top 95%",
																end: "bottom 40%",
																toggleActions: "play none none reverse",
                                scrub: 1,
                                markers: true,
															},
														});

              tl.from(".description", {
                              // opacity: 0,
                              y: 100,
                              // duration: 2,
                              delay: "<",
                              ease: "power4.out",
                              scrollTrigger: {
                                trigger: solution,
                                start: "top 95%",
                                end: "bottom 40%",
                                toggleActions: "play none none reverse",
                                scrub: 1,

                              },
              })
            }

					},
					{ dependencies: [], scope: solutionsRef, revertOnUpdate: true },
				);


  return (
			<section ref={solutionsRef} className="mt-8">
				<div className="container p-0">
					<div className="flex flex-col-reverse w-full p-8 overflow-hidden bg-white lg:flex-row rounded-3xl">
						<div className="lg:w-1/2">
							<video
								controls={true}
								className="object-cover w-full rounded-2xl"
								loop={true}
								autoPlay={true}
							>
								<source src="./images/video.mp4" type="video/mp4" />
								<track
									kind="captions"
									src="captions.vtt"
									// srclang="en"
									label="English"
								/>
							</video>
						</div>
						<div className="flex flex-col justify-center w-full px-6 lg:w-1/2 overflow-clip">
							<span className="mb-4 text-sm text-zinc-700">Solutions</span>
							<h2 className="mb-4 text-3xl font-medium lg:text-5xl text-zinc-700 title">
								Building Foundations, Delivering Success
							</h2>
							<p className="mb-6 text-sm text-zinc-700 description">
								LR Projects offers a comprehensive range of services and
								solutions, underpinned by a robust asset base, to meet the
								diverse needs of our clients in the civil engineering and
								general building sectors
							</p>
							<Button
								className="rounded-full w-28 h-28 border-zinc-500"
								variant="outline"
								type="button"
							>
								<Link href="/about" className="text-xs uppercase">
									About Us
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		);
};
export default Solutions;
