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
            Aide soignante et auxiliaire de puériculture au sein de l&apos;hôpital
            public
          </p>
          <p>- Atelier massage bébé</p>
          <p>- Accompagnante périnatale</p>
          <p>- Massage femme enceinte selon ayurvéda</p>
          <p>- Animation des groupes de paroles pour les papas</p>
          <p>- Atelier toucher relaxation à l&apos;école et à la crèche</p>
          <p>- Atelier yoga kids</p>
          <div className={styles.headerButtons}>
            <a href="#prestations" className="btn btnEsp">Découvrir Mes Services</a>
            <a href="#contact" className="btn btnRdv">Me Contacter</a>
          </div>
        </div>
      </section>
    )
}

export default LandingPage;
