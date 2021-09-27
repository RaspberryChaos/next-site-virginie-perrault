import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Nav.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [screenSize, setScreenSize] = useState("desktop");

  const onScroll = (e) => {
    if (menuOpen === true && screenSize === "mobile") {
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  const handleClick = (e, type) => {
    setMenuOpen((prev) => !prev);
    if (type === "menu" && screenSize === "desktop") {
      setScreenSize("mobile");
    } else {
      setScreenSize("desktop");
    }
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
              onClick={(e) => handleClick(e, "link")}
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
            <a
              className={styles.navLink}
              onClick={(e) => handleClick(e, "link")}
            >
              Qui suis-je?
            </a>
          </Link>
        </li>

        <li>
          <Link href="/#prestations" passHref>
            <a
              className={styles.navLink}
              onClick={(e) => handleClick(e, "link")}
            >
              Prestations
            </a>
          </Link>
        </li>

        <li>
          <Link href="/#avis" passHref>
            <a
              className={styles.navLink}
              onClick={(e) => handleClick(e, "link")}
            >
              Avis
            </a>
          </Link>
        </li>

        <li>
          <Link href="/#bons-cadeaux" passHref>
            <a
              className={styles.navLink}
              onClick={(e) => handleClick(e, "link")}
            >
              Bons Cadeaux
            </a>
          </Link>
        </li>

        <li>
          <Link href="/#contact" passHref>
            <a
              className={styles.navLink}
              onClick={(e) => handleClick(e, "link")}
            >
              Contact
            </a>
          </Link>
        </li>
      </ul>

      <div
        className={menuOpen ? styles.hamburgerActive : styles.hamburger}
        onClick={(e) => handleClick(e, "menu")}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </nav>
  );
};

export default Navbar;
