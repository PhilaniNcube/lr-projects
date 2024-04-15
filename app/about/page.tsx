import type { Metadata } from "next";
import AboutHero from "./_components/about-hero";
import Values from "./_components/values";

export const metadata: Metadata = {
	title: "About Us | LR Projects",
	description:
		"LR Projects is dedicated to redefining the standards of civil engineering through strategic development, meticulous execution, and an unwavering commitment to excellence.",
	keywords:
		"construction, building, civil engineering, project management, construction management, construction company, construction services, construction projects, construction contractors, construction companies, construction industry, construction work, construction services, construction management services, construction project management, construction management companies, construction management services, construction management company, construction management firms, construction management consultants, construction management contractors, construction management services, construction management companies, construction management industry, construction management work",
};

const About = () => {
  return <main>
    <AboutHero />
    <Values />
  </main>;
};
export default About;
