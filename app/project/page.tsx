import type { Metadata } from "next";
import ProjectList from "../(home)/project-list";

export const metadata: Metadata = {
	title: "Projects | LR Projects",
	description:
		"LR Projects is has undertaken numerous projects of various sizes. We are dedicated to redefining the standards of civil engineering through strategic development, meticulous execution, and an unwavering commitment to excellence.",
	keywords:
		"construction, building, civil engineering, project management, construction management, construction company, construction services, construction projects, construction contractors, construction companies, construction industry, construction work, construction services, construction management services, construction project management, construction management companies, construction management services, construction management company, construction management firms, construction management consultants, construction management contractors, construction management services, construction management companies, construction management industry, construction management work",
};

const page = () => {
  return <main className="py-20">
    <ProjectList />
  </main>;
};
export default page;
