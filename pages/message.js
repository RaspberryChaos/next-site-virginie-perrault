import React from 'react';
import Link from "next/link";

const messageStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "73vh",
    textAlign: "center"
}

const messageSent = () => {
    return (
        
        <section id="thanks" style={messageStyles}>
          <h2 className="subheading">Votre message a bien été envoyé!</h2>
          <Link href="/" passHref><a className="btn btnRdv">Retour à l&apos;acceuil</a></Link>
      </section>
    )
}

export default messageSent;
