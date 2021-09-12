import React from "react";
import styles from "../styles/BonsCadeaux.module.css";
import BonsCadeaux from "./BonsCadeaux";

const BonsCadeauxContainer = () => {
  return (
    <section id="bons-cadeaux">
      <h2 className="section-heading">Bons Cadeaux</h2>
      <div className={styles.grid}>

        <BonsCadeaux
          title="Atelier Massage Bébé"
          src="/imgs/footprint-purple.png"
          alt="empreinte de pied de bébé"
          text="5 Séances de 1h30 à Domicile"
        />

        <BonsCadeaux
          title="Atelier Massage Bébé"
          src="/imgs/toys-purple.png"
          alt="jouets pour bébé"
          text="1 Séance Decouvert à Domicile"
        />

        <BonsCadeaux
          title="Massage Femme Enceinte Ayurveda"
          src="/imgs/mother-purple.png"
          alt="femme enceinte"
          text="Un Massage Femme Enceinte Durée 1h30 à Domicile"
        />
      </div>
    </section>
  );
};

export default BonsCadeauxContainer;
