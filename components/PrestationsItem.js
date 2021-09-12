import React from 'react';
import Image from 'next/image';
import styles from "../styles/PrestationsItem.module.css";

const PrestationsItem = (props) => {
    return (
        <div className="grid-item" style={{backgroundColor: props.prestation.backgroundColor}}>
        <h3>{props.prestation.heading}</h3>
        
        <div className={styles.imageContainer}>
          <Image
            src={props.prestation.imageSrc}
            alt={props.prestation.imageAlt}
            className={styles.image}
            width={200}
            height={200}
            layout="responsive"
          />
        </div>

            <p className={styles.alignLeft}>{props.prestation.shortText}</p>

            <div className="hidden">

            {props.prestation.description && 
              <p className={styles.alignLeft}>{props.prestation.description}</p>
            }

            {props.prestation.list &&
            <ul>
                {props.prestation.list.map((item,i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            }

            </div>
            {props.prestation.price1 && <p>{props.prestation.price1}</p>}
            {props.prestation.price2 && <p>{props.prestation.price2}</p>}


        <div className={styles.buttons}>
          {props.prestation.description && <button className="btn btnEsp">En Savoir Plus</button> }
          {props.prestation.available && <a href="#contact" className="btn btnRdv">Prendre Rendez-Vous</a> }
        </div>
      </div>
    )
}

export default PrestationsItem;
