import React from "react";
import styles from "../styles/ContactForm.module.css";

const ContactForm = () => {
  return (
    <div id="contact-form">
      <h2>Formulaire de Contact</h2>
      <form
        target="_blank"
        rel="noopener noreferrer"
        action="https://formsubmit.co/ailiem134@hotmail.com"
        method="POST"
      >
        <input
          type="hidden"
          name="_next"
          value="http://127.0.0.1:5500/merci.html"
        />
        <div className={styles.formGroup}>
          <label for="nom">Votre Nom *</label>
          <input
            type="text"
            name="nom"
            id="nom"
            class="form-control"
            placeholder="Votre nom"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label for="email">E-mail *</label>
          <input
            type="email"
            name="email"
            id="email"
            class="form-control"
            placeholder="Votre Adresse Mail"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label for="message">Votre Message *</label>
          <textarea
            placeholder="Ecrivez votre message ici"
            class="form-control"
            name="message"
            id="message"
            rows="10"
            required
          ></textarea>
        </div>

        <button type="submit" class="btn btnRdv">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
