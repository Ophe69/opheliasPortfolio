import React from "react"
import Title from "../Components/Title"
import ImageSection from "../Components/ImageSection"
import SkillsSection from "../Components/SkillsSection"
import ServicesSection from "../Components/ServicesSection"
import ordinateur from "../img/ordinateur.svg"
import webdesign from "../img/webdesign.svg"
import mobileApplication from "../img/mobileApplication.svg"

function AboutPage() {
  return (
    <div className="AboutPage">
      <Title title={"About Me"} span={"About Me"} />
      <ImageSection />
      <Title title={"Compétences"} span={"Compétences"} />
      <div className="skillsContainer">
        <SkillsSection
          skill={"Javascript"}
          progress={"70%"}
          width={"70%"}
          description={
            "DOM, JQuery, événements, formulaires, map interactive, fonctions avancées, Chart.js"
          }
        />
        <SkillsSection
          skill={"React Js"}
          progress={"70%"}
          width={"70%"}
          description={
            "Reactstrap, Hooks, modules ES6, composants et JSX, états et évènements, structures complexes, Reverse DataFlow, React Router DOM, Redux "
          }
        />
        <SkillsSection
          skill={"React Native"}
          progress={"70%"}
          width={"70%"}
          description={
            "Expo, Navigation, Formulaire, Map et géolocalisation, Web Sockets, Tchat, Expression rationnelle, Local Storage, caméra, unmount, références"
          }
        />
        <SkillsSection
          skill={"Node Js"}
          progress={"70%"}
          width={"70%"}
          description={
            "Express, requêtes HTTP, sessions, Postman, Architecture MVC, Back-end webservice"
          }
        />
        <SkillsSection
          skill={"MongoDB"}
          progress={"80%"}
          width={"80%"}
          description={
            "modélisation BDD, clé étrangère, mongoose, sous-documents, agrégation de données"
          }
        />
        <SkillsSection
          skill={"Java"}
          progress={"60%"}
          width={"60%"}
          description={
            "variables et fonctions, manipulation du DOM, gestion des évènements, POO, héritage, encapsulation des librairies, closures, stockage local, AJAX, navigation et routage"
          }
        />
        <SkillsSection
          skill={"UI/Ux Design"}
          progress={"50%"}
          width={"50%"}
          description={
            "Storyboard, test utilisateur, Wireframe, UI Kit, Mockup, User Stories, TDD, Spring Produit"
          }
        />
        <SkillsSection
          skill={"GitHub"}
          progress={"80%"}
          width={"80%"}
          description={""}
        />
      </div>
      <Title title={"Services"} span={"Services"} />
      <div className="services-container">
        <ServicesSection
          image={webdesign}
          title={"Web design"}
          text={"Design de l application, Mock Up, User Story, Wireframe"}
        />
        <ServicesSection
          image={webdesign}
          title={"Applications web"}
          text={"Développement d application web"}
        />
        <ServicesSection
          image={webdesign}
          title={"Applications mobiles"}
          text={"Développement d application mobile"}
        />
      </div>
    </div>
  )
}

export default AboutPage
