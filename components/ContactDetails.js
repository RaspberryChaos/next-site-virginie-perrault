import React from "react";
import Image from "next/image";
import styles from "../styles/ContactDetails.module.css";

const bgBlue = {
  backgroundColor: "var(--clr-papa)",
};

const bgTurquoise = {
  backgroundColor: "var(--clr-yoga-kids)",
};

const bgPink = {
  backgroundColor: "var(--clr-massage-femme-enceinte)",
};

const bgLightPurple = {
  backgroundColor: "var(--clr-light-purple)",
};

const ContactDetails = () => {
  return (
    <div className={styles.contactDetails}>
      <h2>Coordonnées</h2>

      <div className={styles.contactGroup} style={bgBlue}>
        <div className={styles.imageContainer}>
          <Image
            src="/imgs/icon-phone.png"
            alt="téléphone"
            id="phone"
            width={200}
            height={200}
            layout="responsive"
          />
        </div>
        <p>Téléphone:</p>
        <a href="tel:0660050162">06.60.05.01.62</a>
      </div>

      <div className={styles.contactGroup} style={bgPink}>
        <div className={styles.imageContainer}>
          <Image
            src="/imgs/icon-email.png"
            alt="email"
            width={200}
            height={200}
            layout="responsive"
          />
        </div>
        <p>Email: </p>
        <a href="mailto:perrault.virginie@gmail.com">
          perrault.virginie@gmail.com
        </a>
      </div>

      <div className={styles.contactGroup} style={bgTurquoise}>
        <div className={styles.imageContainer}>
          <Image
            src="/imgs/icon-location.png"
            alt="adresse icon"
            width={200}
            height={200}
            layout="responsive"
          />
        </div>
        <p>Adresse:</p>
        <p>164 quinquies rue d’aguesseau, 92100 Boulogne-Billancourt</p>
      </div>

      <div className={`${styles.contactGroup} ${styles.socialGroup}`} style={bgLightPurple}>
        <p>Réseaux sociaux:</p>
        <a
          href="https://www.facebook.com/ACCOMPAGNANTEPERINATALE/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.resSocial}
        >
        <div className={`${styles.logo} ${styles.logoFB}`}>
          <Image
            src="/imgs/facebook-icon.png"
            alt="facebook logo"
            width={200}
            height={200}
          />
          </div>
          <span>Virginie Perrault, Bien naître et Bien être</span>
        </a>
        <a
          href="https://www.instagram.com/virginie.perrault/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.resSocial}
        >
        <div  className={styles.logo}>
          <Image
            src="/imgs/instagram-logo.png"
            alt="instagram logo"
            width={200}
            height={200}
          />
          </div>
          <span>Virginie Perrault</span>
        </a>
      </div>
    </div>
  );
};

export default ContactDetails;
