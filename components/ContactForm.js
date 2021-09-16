import React, { useState } from "react";
import styles from "../styles/ContactForm.module.css";

const ContactForm = (props) => {

  return (
    <div id="contact-form">
      <h2>{props.title}</h2>
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
          <label htmlFor="nom">Votre Nom *</label>
          <input
            type="text"
            name="nom"
            id="nom"
            placeholder="Votre nom"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">E-mail *</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Votre Adresse Mail"
            required
          />
        </div>

        {props.title === "Demande de bon cadeau" &&
          <div>
                    <div className={styles.formGroup}>
                        <label htmlFor="bons-cadeaux">Bon Cadeau :</label>
                          <select name="bons-cadeaux" id="bons-cadeaux">
                            <option className={styles.choix} value="choix">Choisir un Bon Cadeau</option>
                            <option value="massage_bebe_5seances">
                              Massage Bébé - 5 séances (200€)
                            </option>
                            <option value="massage_bebe_seance_decoverte">
                              Massage Bébé - Séance Decouverte (60€)
                            </option>
                            <option value="massage_femme_enceinte">
                              Massage Femme Enceinte Ayurveda (90€)
                            </option>
                            <option value="accompagnant_perinatale_conseils">
                              Accompagnante Périnatale - Conseils (50€)
                            </option>
                            <option value="accompagnant_perinatale_soins">
                              Accompagnante Périnatale - Soins (60€)
                            </option>
                          </select>

                    </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="quantity">Quantité : </label>
                    <input
                      type="number"
                      id="quantité"
                      name="quantité"
                      min="1"
                      max="100"
                      // value={quantity}
                      // onChange={handleChange}
                      defaultValue={1}
                    />
                  </div>
                </div>}

        <div className={styles.formGroup}>
          <label htmlFor="message">Votre Message *</label>
          <textarea
            placeholder="Ecrivez votre message ici"
            name="message"
            id="message"
            rows="10"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btnRdv">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
