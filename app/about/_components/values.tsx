import { values } from "@/data/services";
import Image from "next/image";

const Values = () => {
  return (
			<section className="mt-8">
				<div className="container p-0 bg-white rounded-3xl">
					<div className="p-6 lg:p-10">
						<h2 className="text-3xl">Our Values</h2>
						<div className="w-full mt-6">
							<div className="grid grid-cols-1 gap-3 lg:gap-6 sm:grid-cols-2 lg:grid-cols-3">
								{values.map((value) => (
									<article
										key={value.name}
										className="overflow-hidden  rounded-2xl  @container aspect-[3/4]"
									>
										<Image
											width={600}
											height={900}
											src={value.image}
											alt={value.name}
											className="object-cover aspect-[3/4] w-full rounded-2xl absolute inset-0 z-[-1] transition-transform duration-300 transform scale-100 hover:scale-110"
										/>
										<div className="flex flex-col items-start justify-end flex-1 h-full p-4 bg-slate-800/60">
											<h3 className="text-xl font-semibold text-white">{value.name}</h3>
											<p className="mt-2 text-sm text-gray-50">
												{value.description}
											</p>
										</div>
									</article>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		);
};
export default Values;
