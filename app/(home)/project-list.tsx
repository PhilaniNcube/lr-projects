/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import projects from "@/data/projects";
import { EyeOpenIcon } from "@radix-ui/react-icons";
import Link from "next/link";


const ProjectList = () => {
  return (
			<section className="my-8">
				<div className="container p-0 ">
					<h2 className="mb-4 text-3xl text-brand lg:text-5xl">Our Projects</h2>
					<div className="grid grid-cols-1 gap-6 px-8 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-0 @container">
						{projects.map((project) => (
							<div key={project.title} className="relative group ">
								<img
									src={project.image}
									alt={project.title}
									className="object-cover w-full rounded-lg shadow-lg aspect-square @sm:aspect-[3/4] @md:aspect-[3/5] @lg:aspect-[3/4] "
								/>
								<div className="absolute inset-0 flex flex-col justify-end p-8 text-white rounded-lg group-hover:bg-slate-950/30 bg-slate-950/60">
									<h3 className="text-lg font-medium line-clamp-2">
										{project.title}
									</h3>
									<p className="my-2 text-sm line-clamp-1">{project.client}</p>
									{/* <p className="text-sm line-clamp-2">{project.scope}</p> */}
									<Button type="button" className="mt-3 bg-emerald-950 gap-x-2">
										<Link
											className="flex items-center justify-center gap-x-3"
											href={`/project/${project.id}`}
										>
											<EyeOpenIcon className="w-6 h-6" />
											<span>View Project</span>
										</Link>
									</Button>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		);
};
export default ProjectList;
