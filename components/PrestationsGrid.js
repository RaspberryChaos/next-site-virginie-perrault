import React from 'react';
import PrestationsItem from "./PrestationsItem";
import { prestationsData } from "../prestationsData";

const PrestationsGrid = () => {
    return (
        <section id="prestations">
        <h2 className="sectionHeading">Prestations</h2>
        <div className="location">
          <p>Séance à domicile </p>
          <p>ou</p> 
          <p>164 quinquies rue d'aguesseau</p>
          <p>92100 BOULOGNE BILLANCOURT</p>
        </div>

        <div id="prestations-grid">

        {prestationsData && prestationsData.map((prestation,i) => (
          <PrestationsItem key={i} prestation={prestation}/>
        ))}

        </div>
      </section>
    )
}

export default PrestationsGrid;
