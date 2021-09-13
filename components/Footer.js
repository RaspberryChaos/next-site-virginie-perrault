import React from "react";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <Link href="/mentions-legales">Mentions Légales</Link>
      <p>&copy; Copyright 2021</p>
    </footer>
  );
};

export default Footer;
