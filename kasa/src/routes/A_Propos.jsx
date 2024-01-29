import React from "react";
import AboutUsBannerImgLink from "../components/AboutUsBanner";
import DropdownButton from "../components/DropdownButton";

const A_propos = () => {
    return (
      <div id="AboutUsPage">
        <AboutUsBannerImgLink />
        <div id="Dropdown_parent">
          <DropdownButton Title='Fiabilité' Text='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toute les informations sont régulièrements vérifiées par nos équipes.' />
          <DropdownButton Title='Respect' Text='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoir ou de perturbation du voisinage entraînera une exclusion de notre plateforme'  />
          <DropdownButton Title='Service' Text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." />
          <DropdownButton Title='Sécurité' Text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes qui pour les voyageurs, chaque logement correspond au critères de sécrurité établis par nos services. En laissant une note aussib ien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisosns également des ateliers sur la sécurité domestique pour nos hôtes." />
        </div>
      </div>
      
    )
  };
  
  export default A_propos;