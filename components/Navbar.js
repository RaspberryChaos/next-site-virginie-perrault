import React, { useState} from "react";
import styles from "../styles/Nav.module.css";


const Navbar = () => {

const [menuOpen, setMenuOpen] = useState(false);

const handleClick = () => {
    setMenuOpen(prev => !prev);
}

  return (
    <nav className={styles.mainNav}>
        
        <ul className={styles.navMenu} style={{right: (menuOpen ? "0" : "-100%")}}>
          <li><a href="/#qui-suis-je" className={styles.navLink}>Qui suis-je?</a></li>
          <li><a href="/#prestations" className={styles.navLink}>Prestations</a></li>
          <li><a href="/#avis" className={styles.navLink}>Avis</a></li>
          <li><a href="/#bons-cadeaux" className={styles.navLink}>Bons Cadeaux</a></li>
          <li><a href="/#contact" className={styles.navLink}>Contact</a></li>
        </ul>
        <div className={menuOpen ? styles.hamburgerActive : styles.hamburger}  onClick={handleClick}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
      </div>
      </nav>
  );
};

export default Navbar;