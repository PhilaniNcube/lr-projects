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
  title: "Create Next App",
  description: "Generated by create next app",
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
