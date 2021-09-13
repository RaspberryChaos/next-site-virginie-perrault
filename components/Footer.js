import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="footer">
      <Link href="/mentions-legales">Mentions Légales</Link>
      <p>&copy; Copyright 2021</p>
    </footer>
  );
};

export default Footer;
