import React from "react";
import Link from "next/link";
import Image from 'next/image';

const style = {
        border: "4px solid var(--clr-purple)",
        color: "var(--clr-purple)",
        backgroundColor: "#ffffff",
        boxShadow: "var(--box-shadow)"
}

const imageContainer = {
  width: "40%",
  margin: "1rem"
}


const BonsCadeaux = (props) => {
  return (
    <div className="grid-item" style={style}>
      <h3>{props.title}</h3>
      <div style={imageContainer}>
      <Image
        src={props.src}
        alt={props.alt}
        width={350}
        height={300}
        layout="responsive"
        className="bc-img"
      />

      </div>
      <p>{props.text}</p>
      <Link href="/bons-cadeaux" passHref> 
      <button className="btn btnRdv">
        Acheter
        </button>
      </Link>
    </div>
  );
};

export default BonsCadeaux;
