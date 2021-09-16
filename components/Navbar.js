import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Nav.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hover, setHover] = useState(false);

  const handleClick = () => {
    setMenuOpen((prev) => !prev);
  };

  const onMouseEnter = () => setHover(true);
  const onMouseLeave = () => setHover(false);

  return (
    <nav className={styles.mainNav}>
      <ul
        className={styles.navMenu}
        style={{ right: menuOpen ? "0" : "-100%" }}
      >
        <li>
          <Link href="/" passHref>
            <a
              onClick={handleClick}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              {hover ? (
                <Image
                  src="/imgs/home-icon.png"
                  alt="Maison"
                  width={50}
                  height={50}
                />
              ) : (
                <Image
                  src="/imgs/home-icon-white.png"
                  alt="Maison"
                  width={50}
                  height={50}
                />
              )}
            </a>
          </Link>
        </li>

        <li>
          <Link href="/#qui-suis-je" passHref>
            <a className={styles.navLink} onClick={handleClick}>
              Qui suis-je?
            </a>
          </Link>
        </li>

        <li>
          <Link href="/#prestations" passHref>
            <a className={styles.navLink} onClick={handleClick}>
              Prestations
            </a>
          </Link>
        </li>

        <li>
          <Link href="/#avis" passHref>
            <a className={styles.navLink} onClick={handleClick}>
              Avis
            </a>
          </Link>
        </li>

        <li>
          <Link href="/#bons-cadeaux" passHref>
            <a className={styles.navLink} onClick={handleClick}>
              Bons Cadeaux
            </a>
          </Link>
        </li>

        <li>
          <Link href="/#contact" passHref>
            <a className={styles.navLink} onClick={handleClick}>
              Contact
            </a>
          </Link>
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
