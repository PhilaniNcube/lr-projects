import ContactForm from "./contact-form";

const ContactHero = () => {
  return <section>
    <div className="container p-0 bg-white rounded-3xl">
      <div className="grid grid-cols-1 gap-6 p-8 md:grid-cols-2 lg:gap-10">
        <div className="w-full">
          <h1 className="text-4xl">Contact Us</h1>
          <p className="text-xl">We would love to hear from you.</p>
        </div>
        <ContactForm />
      </div>
    </div>
  </section>;
};
export default ContactHero;
