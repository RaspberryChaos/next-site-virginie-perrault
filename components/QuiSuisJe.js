import React from 'react';
import Image from 'next/image';
import styles from '../styles/QuiSuisJe.module.css';

const QuiSuisJe = () => {
    return (
        <section id="qui-suis-je" className={`${styles.grid} purple-container`}>
        <div className={styles.photoContainer}>
          <Image
            src={"/imgs/virginie.jpg"}
            width={417}
            height={627}
            layout="responsive"
            alt="Virginie Perrault"
            className={styles.profilePic}
          />
        </div>

        <div className={styles.about}>
          <h1 className={styles.profileHeading}>Virginie Perrault</h1>
          <p style={{textAlign:"left"}}>
            Je m&apos;appelle Virginie, je suis âgée de 39 ans, je suis maman de deux
            enfants, et cela fait maintenant un peu plus de 15 ans que je
            travaille en tant qu&apos;aide-soignante et auxiliaire de puériculture.
            Avec mon savoir, mes connaissances et ma bienveillance, j&apos;aimerais
            accompagner les mamans à vivre leur maternité.
          </p>

          <h3 className={styles.profileHeading}>Mes Diplômes</h3>

          <p>Diplôme d&apos;État d&apos;Auxiliaire de Puériculture</p>

          <p>
            Instructeur en Massage pour Bébé, International Association of
            Infant Massage
          </p>

          <p>Massage Femme Enceinte selon Ayurvéda</p>
        </div>
      </section>
    )
}

export default QuiSuisJe;
