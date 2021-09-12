import React from 'react';
import styles from "../styles/LandingPage.module.css";

const LandingPage = () => {
    return (
        <section id="landingPage" className={styles.landingPage}>
        <div id="headings">
          <h1>Bien naître et</h1>
          <h1>Bien être</h1>
          <h2>Virginie Perrault</h2>
          <p className={styles.aideSoignante}>
            Aide soignante et auxiliaire de puériculture au sein de l'hôpital
            public
          </p>
          <p>-Ateliers massage bébé</p>
          <p>-Massage femmes enceintes</p>
          <p>-Animation des groupes de paroles pour les papas</p>
          <p>-Conseils en périnatalité</p>
          <p>-Ateliers massage à l’école et à la crèche</p>
          <div className={styles.headerButtons}>
            <a href="#prestations" className="btn btnEsp">Découvrir Mes Services</a>
            <a href="#contact" className="btn btnRdv">Me Contacter</a>
          </div>
        </div>
      </section>
    )
}

export default LandingPage;
