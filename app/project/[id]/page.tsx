import { Separator } from "@/components/ui/separator";
import projects from "@/data/projects";
import Image from "next/image";

const ProjectPage = async ({params: {id}}:{params:{id:number}}) => {

  // create a healper function to take in a number and return a currency formated string
  function formatCurrency(value: number) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'ZAR',
    }).format(value);
  }

  const project = projects.find((project) => {
    return project.id === Number(id);
  }
  );

  if (!project) {
    return <h1>Project not found</h1>;
  }

  // calculate the total price of the project from the value of each project.phase.value
  const total = project.phases.reduce((acc, phase) => {
    return acc + phase.value;
  }, 0);

  return (
			<main>
				<section className="container p-0 mt-32">
					<div className="grid grid-cols-1 gap-6 p-4 bg-white rounded-3xl md:grid-cols-2">
						<div className="flex flex-col items-start justify-center space-y-3">
							<h1 className="text-4xl font-bold">{project.title}</h1>
							<p className="text-xl text-brand">
								<span className="font-semibold ">Client:</span> {project.client}
							</p>
							<p className="text-md">
								<span className="font-medium">Project Scope:</span>{" "}
								{project.scope}
							</p>
							{/* <p className="text-2xl font-semibold">
								Value: {formatCurrency(total)}
							</p> */}
							<Separator className="my-3" />
							<p className="text-lg">Project Phases</p>
							<div className="grid grid-cols-1 gap-3 md:grid-cols-2">
								{project.phases.map((phase) => (
									<div
										key={phase.title}
										className="flex flex-col"
									>
										<p className="text-xl font-semibold">{phase.title}</p>
										{/* <p className="text-lg font-medium">
											{formatCurrency(phase.value)}
										</p> */}
										<p className="text-lg">
											Completed: {phase.completion_date}
										</p>
									</div>
								))}
							</div>
							<Separator className="my-3" />
							<div className="flex items-start justify-start w-full space-x-4">
								<p className="text-lg font-semibold">Client Contact:</p>
								<div className="flex flex-col">
									<p className="text-lg font-medium">
										{project.client_contact}
									</p>
									<p className="text-lg">{project.client_contact_number}</p>
								</div>
							</div>
						</div>
						<div>
							<Image
								width={500}
								height={500}
								src={project.image}
								alt={project.title}
								className="object-cover w-full rounded-lg shadow-lg aspect-square"
							/>
						</div>
					</div>
				</section>
			</main>
		);
};
export default ProjectPage;
