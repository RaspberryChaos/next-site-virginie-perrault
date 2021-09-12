import React from "react";
import Image from 'next/image';

const style = {
        border: "4px solid var(--clr-purple)",
        color: "var(--clr-purple)",
        backgroundColor: "#ffffff"
}

const BonsCadeaux = (props) => {
  return (
    <div className="grid-item" style={style}>
      <h3>{props.title}</h3>
      <Image
        src={props.src}
        alt={props.alt}
        width={200}
        height={200}
        layout="responsive"
        className="bc-img"
      />
      <p>{props.text}</p>
      <a href="/bons-cadeaux.html" className="btn btnRdv">
        Acheter
      </a>
    </div>
  );
};

export default BonsCadeaux;
