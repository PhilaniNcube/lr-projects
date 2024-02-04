import HomePageHero from "./(home)/home-page-hero";
import HomePageMission from "./(home)/home-page-mission";
import AnimatedSection from "./(home)/animated-section";
import Solutions from "./(home)/solutions";
import ProjectList from "./(home)/project-list";

export default function Home() {
  return (
			<main className="overflow-clip">
				<HomePageHero />
				<HomePageMission />
				<AnimatedSection />
			  <Solutions />
        <ProjectList />
			</main>
		);
}
