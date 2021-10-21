import Image from "next/image";

const Avis = () => {
  return (
    <section id="avis">
      <h2 className="sectionHeading">Avis Clients</h2>
      <div className="avisSection">
        <Image
          src={"/imgs/avisGoogle.png"}
          width={350}
          height={200}
          alt="Bouton pour donnez votre avis sur google"
        />
        <a
          href="https://search.google.com/local/writereview?placeid=ChIJicxFWHmYpa4R8-Ukm1-v214"
          target="_blank"
          className="btn btnEsp"
        >
          Donnez votre avis sur Google
        </a>
      </div>
    </section>
  );
};

export default Avis;
