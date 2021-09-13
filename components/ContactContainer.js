import React from "react";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";

const ContactContainer = () => {
  return (
    <section id="contact">
      <h2 className="sectionHeading">Contact</h2>
      <div className="purple-container contact-container">
        <ContactDetails />
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactContainer;
