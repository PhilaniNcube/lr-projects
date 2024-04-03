import ContactForm from "./contact-form";

const ContactHero = () => {
  return (
			<section>
				<div className="container p-0 bg-white rounded-3xl">
					<div className="grid grid-cols-1 gap-6 p-8 md:grid-cols-2 lg:gap-10">
						<div className="w-full">
							<h1 className="text-4xl">Contact Us</h1>
							<p className="text-md my-2">We would love to hear from you.</p>
							<p className="text-md my-2">Tel: +27(0)71 474 8919</p>
							<a href="mailto:loyiso@lrprojects.co.za" className="text-md my-2">
								Email: loyiso@lrprojects.co.za
							</a>
							<iframe
                className="mt-6"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.2345578235822!2d25.522871975870828!3d-33.93509482249597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e7ad1269b85b6d7%3A0x36aaaa2f67baa343!2s76%20Blomme%20Ave%2C%20Western%20Hills%2C%20Gqeberha%2C%206025!5e0!3m2!1sen!2sza!4v1712171073807!5m2!1sen!2sza"
								title="Google Maps"
								width="600"
								height="450"
								style={{ border: 0 }}
								allowFullScreen={false}
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
