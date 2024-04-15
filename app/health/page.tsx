import type { Metadata } from "next";
import HealthHero from "./_components/health-hero";
import Policies from "./_components/policies";

export const metadata: Metadata = {
	title: "Health and Safety | LR Projects",
	description:
		"LR Projects is thoroughly committed to ensuring the utmost standards of health and safety in every operation.",
	keywords:
		"construction, building, civil engineering, project management, construction management, construction company, construction services, construction projects, construction contractors, construction companies, construction industry, construction work, construction services, construction management services, construction project management, construction management companies, construction management services, construction management company, construction management firms, construction management consultants, construction management contractors, construction management services, construction management companies, construction management industry, construction management work",
};

const Health = () => {
  return (
    <main className="py-16 lg:py-20">
      <HealthHero />
      <Policies />
    </main>
  );
};
export default Health;
