import Image from "next/image";

const HealthHero = () => {
  return <section>
    <div className="container p-0 bg-white rounded-3xl">
      			<div className="grid grid-cols-1 gap-8 p-8 py-10 md:grid-cols-2">
						<div className="w-full">
							<h1 className="text-3xl md:text-5xl ">Health and Safety </h1>
						</div>
						<div className="w-full">
							<h2 className="text-2xl font-thin">
								LR Projects is thoroughly committed to ensuring the utmost standards of health and safety in every operation.
							</h2>
							<p className="mt-4 text-sm font-thin">
							We put a high value on the health and well-being of our employees, contractors, clients, and the broader communities we serve, and work relentlessly to ensure a safe and secure work environment. This is achieved by strictly adhering to industry best practices, legal requirements, and the ongoing enhancement of our health and safety protocols.
							</p>
						</div>
					</div>
          <div className="w-full p-8">
            <Image src="/images/hankey.webp" width={1000} height={1000} alt="Health And Safety" className="w-full object-cover aspect-[3/1] rounded-2xl" />
          </div>
    </div>
  </section>;
};
export default HealthHero;
