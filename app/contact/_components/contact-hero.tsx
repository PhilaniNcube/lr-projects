import type { Metadata } from "next";
import ContactForm from "./contact-form";
import Link from "next/link";

export const metadata:Metadata = {
  title: "Contact Us | LR Projects",
  description: "We would love to hear from you",
  keywords: 'construction, building, civil engineering, project management, construction management, construction company, construction services, construction projects, construction contractors, construction companies, construction industry, construction work, construction services, construction management services, construction project management, construction management companies, construction management services, construction management company, construction management firms, construction management consultants, construction management contractors, construction management services, construction management companies, construction management industry, construction management work'
 }

const ContactHero = () => {
  return (
			<section>
				<div className="container p-0 bg-white rounded-3xl">
					<div className="grid grid-cols-1 gap-6 p-8 md:grid-cols-2 lg:gap-10">
						<div className="w-full">
							<h1 className="text-4xl">Contact Us</h1>
							<p className="my-2 text-md">We would love to hear from you.</p>
							<p className="my-2 text-md">Tel: +27(0)71 474 8919</p>
							<Link href="mailto:admin@lrprojects.co.za" className="my-2 text-md">
								Email: admin@lrprojects.co.za
							</Link>
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1170.5469061444412!2d25.424132648418233!3d-33.92037629449022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e7ad92e69be3613%3A0xe68122ebadf68518!2s76%20Blommelaan%2C%20Greenbushes%2C%20Gqeberha%2C%206390!5e0!3m2!1sen!2sza!4v1713200778513!5m2!1sen!2sza"
                title="Google Maps"
								width="600"
								height="450"
								style={{border:0}}
								allowFullScreen={true}
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							/>
						</div>
						<ContactForm />
					</div>
				</div>
			</section>
		);
};
export default ContactHero;
