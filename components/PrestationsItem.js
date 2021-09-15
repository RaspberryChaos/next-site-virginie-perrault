import React from 'react';
import Image from 'next/image';
import styles from "../styles/PrestationsItem.module.css";

const PrestationsItem = (props) => {


    return (
        <div className="grid-item" style={{backgroundColor: props.prestation.backgroundColor, boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}}>
        <h3 className={styles.prestationHeading}>{props.prestation.heading}</h3>
        
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

{props.prestation.description && 
            <details className={styles.details}>
    <summary >En Savoir Plus</summary>
    
            <div >

            {props.prestation.description && 
              <p className={styles.alignLeft}>{props.prestation.description}</p>
            }
            {props.prestation.description2 && 
              <p className={styles.alignLeft}>{props.prestation.description2}</p>
            }

            {props.prestation.list &&
            <ul>
                {props.prestation.list.map((item,i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            }
            {props.prestation.priceGrands && <p>{props.prestation.priceGrands}</p>}

            {props.prestation.description3 && 
              <p className={styles.alignLeft}>{props.prestation.description3}</p>
            }
            {props.prestation.description4 && 
              <p className={styles.alignLeft}>{props.prestation.description4}</p>
            }

            {props.prestation.list2 &&
            <ul>
                {props.prestation.list2.map((item,i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            }
            {props.prestation.pricePetits && <p>{props.prestation.pricePetits}</p>}

            </div>
</details>
}

            {props.prestation.price1 && <p>{props.prestation.price1}</p>}
            {props.prestation.price2 && <p>{props.prestation.price2}</p>}


        <div className={styles.buttons}>
          {/* {props.prestation.description && <button className="btn btnEsp" onClick={handleClick}>En Savoir Plus</button> } */}
          {props.prestation.available && <a href="#contact" className="btn btnRdv">Prendre Rendez-Vous</a> }
        </div>
      </div>
    )
}

export default PrestationsItem;
