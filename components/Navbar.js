import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Nav.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className={styles.mainNav}>
      <ul
        className={styles.navMenu}
        style={{ right: menuOpen ? "0" : "-100%" }}
      >
        <Link href="/" passHref>
          <a onClick={handleClick}>
            <Image
              src="/imgs/home-icon.png"
              alt="Maison"
              width={50}
              height={50}
            />
          </a>
        </Link>

        <li>
          <a href="/#qui-suis-je" className={styles.navLink} onClick={handleClick}>
            Qui suis-je?
          </a>
        </li>
        <li>
          <a href="/#prestations" className={styles.navLink} onClick={handleClick}>
            Prestations
          </a>
        </li>
        <li>
          <a href="/#avis" className={styles.navLink} onClick={handleClick}>
            Avis
          </a>
        </li>
        <li>
          <a href="/#bons-cadeaux" className={styles.navLink} onClick={handleClick}>
            Bons Cadeaux
          </a>
        </li>
        <li>
          <a href="/#contact" className={styles.navLink} onClick={handleClick}>
            Contact
          </a>
        </li>
      </ul>
      <div
        className={menuOpen ? styles.hamburgerActive : styles.hamburger}
        onClick={handleClick}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </nav>
  );
};

export default Navbar;
