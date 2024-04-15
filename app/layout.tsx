import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://www.lrprojects.co.za"),
	title: "LR Projects",
	description:
		"LR Projects is a construction company that is dedicated to redefining the standards of civil engineering through strategic development, meticulous execution, and an unwavering commitment to excellence.",
	viewport: "width=device-width, initial-scale=1.0",
	keywords:
		"construction, building, civil engineering, project management, construction management, construction company, construction services, construction projects, construction contractors, construction companies, construction industry, construction work, construction services, construction management services, construction project management, construction management companies, construction management services, construction management company, construction management firms, construction management consultants, construction management contractors, construction management services, construction management companies, construction management industry, construction management work",
	openGraph: {
		title: "LR Projects",
		description:
			"LR Projects is a construction company that is dedicated to redefining the standards of civil engineering through strategic development, meticulous execution, and an unwavering commitment to excellence.",
		type: "website",
		url: "https://www.lrprojects.co.za",
	},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
			<html lang="en">
				<body className={poppins.className}>
          <Navigation />
          {children}
        </body>
			</html>
		);
}
