export default function MentionsLegales() {
  const articles = {
    textAlign: "left",
    padding: "1.5rem",
  };

  const headerMargin = {
    marginBottom: "1rem"
  }

  return (
    <div className="container">
      <h1 className="sectionHeading">Mentions Legales</h1>
      <p style={{marginBottom: "2rem"}}>En vigueur au 15/09/2021</p>
      <div style={articles}>
        <p>
          Conformément aux dispositions des Articles 6-III et 19 de la Loi
          n°2004-575 du 21 juin 2004 pour la Confiance dans l&apos;économie
          numérique, dite L.C.E.N., il est porté à la connaissance des
          Utilisateurs du site bien-naitre-et-bien-etre.com les présentes
          mentions légales.
        </p>
        <p>
          La connexion et la navigation sur le site bien-naitre-et-bien-etre.com
          par l&apos;Utilisateur implique acceptation intégrale et sans réserve des
          présentes mentions légales.
        </p>
        <p>
          Ces dernières sont accessibles sur le site à la rubrique « Mentions
          légales ».
        </p>
      </div>

      <div style={articles}>
        <h3 style={headerMargin}>ARTICLE 1 : L&apos;éditeur</h3>
        <p>
          L&apos;édition et la direction de la publication du site
          bien-naitre-et-bien-etre.com est assurée par VIRGINIE PERRAULT,
          domiciliée 164 QUINTO RUE D&apos;AGUESSEAU, dont le numéro de téléphone est
          0660050162, et l&apos;adresse e-mail perrault.virginie@gmail.com.
        </p>
      </div>

      <div style={articles}>
        <h3 style={headerMargin}>ARTICLE 2 : L&apos;hébergeur</h3>
        <p>
          L&apos;hébergeur du site bien-naitre-et-bien-etre.com est la Société OVH,
          dont le siège social est situé au 2 rue kelermann BP 80157 59100
          Roubaix. 
        </p>
      </div>

      <div style={articles}>
        <h3 style={headerMargin}>ARTICLE 3 : Accès au site </h3>
        <p>
          Le site est accessible par tout endroit, 7j/7, 24h/24 sauf cas de
          force majeure, interruption programmée ou non et pouvant découlant
          d’une nécessité de maintenance. En cas de modification, interruption
          ou suspension des services le site bien-naitre-et-bien-etre.com ne
          saurait être tenu responsable.
        </p>
      </div>

      <div style={articles}>
        <h3 style={headerMargin}>ARTICLE 4 : Collecte des données</h3>
        <p>
          Le site est exempté de déclaration à la Commission Nationale
          Informatique et Libertés (CNIL) dans la mesure où il ne collecte
          aucune donnée concernant les utilisateurs.
        </p>
      </div>

      <div style={articles}>
        <h3 style={headerMargin}>ARTICLE 5 : Cookies</h3>
        <p>
          L&apos;Utilisateur est informé que lors de ses visites sur le site, un
          cookie peut s&apos;installer automatiquement sur son logiciel de
          navigation.
        </p>
        <p>En naviguant sur le site, il les accepte.</p>
        <p>
          Un cookie est un élément qui ne permet pas d’identifier l&apos;Utilisateur
          mais sert à enregistrer des informations relatives à la navigation de
          celui-ci sur le site Internet. L&apos;Utilisateur pourra désactiver ce
          cookie par l&apos;intermédiaire des paramètres figurant au sein de son
          logiciel de navigation.
        </p>
      </div>

      <div style={articles}>
        <h3 style={headerMargin}>ARTICLE 6 : Propriété intellectuelle</h3>
        <p>
          Toute utilisation, reproduction, diffusion, commercialisation,
          modification de toute ou partie du site bien-naitre-et-bien-etre.com,
          sans autorisation de l&apos;Editeur est prohibée et pourra entraînée des
          actions et poursuites judiciaires telles que notamment prévues par le
          Code de la propriété intellectuelle et le Code civil.
        </p>
      </div>

      <p style={articles}>Rédigé sur http://legalplace.fr </p>
      
    </div>
  );
}
