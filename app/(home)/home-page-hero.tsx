import Image from "next/image";

const HomePageHero = () => {
  return (
			<section className="container relative px-0 mt-8 overflow-hidden rounded-3xl isolate">
        <Image priority src="/images/construction.webp" alt="LR Projects" width={1456} height={816} className="w-full aspect-[3/1] object-cover rounded-xl" />
        <div className="absolute inset-0 bg-black/60">
          <div className="container relative z-10 flex items-center h-full text-white">
            <h1 className="text-2xl font-medium md:text-5xl">Quality work, <br />delivered on time</h1>
          </div>
        </div>
      </section>
		);
};
export default HomePageHero;
