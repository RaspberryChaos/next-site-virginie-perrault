import React from 'react';
import ContactDetails from "../components/ContactDetails";
import ContactForm from "../components/ContactForm";

const BonsCadeauxPage = () => {
    return (
    <section id="bons-cadeaux-page">
    <div className="container">
      <h2 className="sectionHeading">Contact</h2>
      <div className="purple-container contact-container">
        <ContactForm title="Demande de bons cadeaux" />
        <ContactDetails />
      </div>
      </div>
    </section>
    )
}

export default BonsCadeauxPage;