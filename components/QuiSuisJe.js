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
          Maman de 2 enfants et auxiliaire de puériculture, j&apos;ai travaillé pendant de nombreuses années au sein de différents services hospitaliers. Aujourd&apos;hui, je vous accompagne à domicile avec mon savoir faire, mes connaissances et ma bienveillance dans cette aventure de la maternité et de la parentalité afin de vivre au mieux votre rôle de parents. 
          </p>

          <h2 className={styles.profileHeading}>Mes Diplômes</h2>

          <p>Diplôme d&apos;état d&apos;auxiliaire de puériculture</p>

          <p>
            Instructeur en massage pour bébé, International Association of
            Infant Massage
          </p>

          <p>Massage femme enceinte selon ayurvéda</p>
          <p>Animatrice en atelier yoga kids</p>
        </div>
      </section>
    )
}

export default QuiSuisJe;
