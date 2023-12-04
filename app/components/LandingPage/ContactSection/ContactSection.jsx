import React from "react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section className="container mx-auto mt-8 p-8">
      <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
      <ContactForm />
    </section>
  );
};

export default ContactSection;
