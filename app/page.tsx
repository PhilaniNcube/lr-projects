import HomePageHero from "./(home)/home-page-hero";
import HomePageMission from "./(home)/home-page-mission";
import AnimatedSection from "./(home)/animated-section";
import Solutions from "./(home)/solutions";
import ProjectList from "./(home)/project-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home | LR Projects",
	description: "We would love to hear from you",
  keywords: 'construction, building, civil engineering, project management, construction management, construction company, construction services, construction projects, construction contractors, construction companies, construction industry, construction work, construction services, construction management services, construction project management, construction management companies, construction management services, construction management company, construction management firms, construction management consultants, construction management contractors, construction management services, construction management companies, construction management industry, construction management work'
};

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
