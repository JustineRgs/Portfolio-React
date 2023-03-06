import "./Projects.css";
import { useState } from "react";

export default function Projects({ project }) {
  // Tableau des projets
  const projects = [
    {
      name: "Osyla",
      title: "Générateur de formulaire",
      description:
        "Générateur de formulaire à partir d'un JSON. Création d'une maquette Figma, et réalisation en ReactJs : Modale avec une fonction reduce, récupération des données dynamique, affichage conditionnel des différentes étapes et navigation entre ces étapes avec ReactRouter.",
      support: "REACT JS / SCSS",
      type: "Professionnel",
      imgSrc: "img/Osyla.png",
      imgAlt: "Photo du projet Générateur de formulaire",
      url: "https://justinergs.github.io/Osyla---Form/",
    },
    {
      name: "AgriProxi",
      title: "Création d'une start-up fictive",
      description:
        "Brain storming, mise en place du projet et recherche d'un jeux de données open-source. Tri et intégration du CSV à la base de donnée MySQL, gestion de la base sur DBeaver. Mise en place d'une carte intéractive via une API, CRUD, puis création d'un gestionnaire de demande de devis avec générateur de PDF.",
      support: "SYMFONY / SCSS / JAVASCRIPT",
      type: "Formation",
      imgSrc: "img/AgriProxi.png",
      imgAlt: "Photo du projet AgriProxi",
      url: "#",
    },
    {
      name: "MyProject",
      title:
        "Création d'un site de gestion de projets à partir d'un cahier des charges",
      description:
        "Création d'un micro Framework en PHP, mise en place d'une base de donnée MySQL et gestion de la base sur phpMyAdmin.",
      support: "HTML / CSS / PHP",
      type: "Formation",
      imgSrc: "img/MyProject.png",
      imgAlt: "Photo du projet MyProject",
      url: "#",
    },
    {
      name: "SunPower",
      title: "Création d'un site vitrine à partir d'un cahier des charges.",
      description:
        "Mise en place d'une charte graphique et d'une maquète Figma, intégration en HTML / CSS. Vérification de formulaire, modale et animation en JavaScript.",
      support: "HTML / CSS / JAVASCRIPT",
      type: "Formation",
      imgSrc: "img/SunPower.png",
      imgAlt: "Photo du projet SunPower",
      url: "https://justinergs.github.io/Digi-SunPower/",
    },
    {
      name: "Lilipinso",
      title: "Apprentissage intégration avec un framework",
      description: "Intégration avec maquette.",
      support: "HTML / BOOTSTRAP",
      type: "Formation",
      imgSrc: "img/Lilipinso.png",
      imgAlt: "Photo du projet Lilipinso",
      url: "https://justinergs.github.io/Digi-Bootstrap/",
    },
    {
      name: "Systematic",
      title: "Apprentissage intégration",
      description: "Première intégration d'une maquette simple en HTML / CSS.",
      support: "HTML / CSS",
      type: "Formation",
      imgSrc: "img/Systematic.png",
      imgAlt: "Photo du projet Systematic",
      url: "https://justinergs.github.io/Digi-Systematic/",
    },
    {
      name: "Frazer Crossfit",
      title: "Projet UX : Maquette Balsamik",
      description:
        "Création d'une maquette fonctionelle à partir d'un cahier des charges.",
      support: "BALSAMIK",
      type: "Formation",
      imgSrc: "img/FrazerCrossifitBalsamiq.png",
      imgAlt: "Photo du projet Frazer Crossfit",
      url: "img/Frazer Crossifit - Balsamiq.pdf",
    },
    {
      name: "DigiSound",
      title: "Projet UX : Maquette Balsamik",
      description:
        "Création d'une entreprise fictive, de sa charte graphique, et mise en place d'une maquette fonctionnelle.",
      support: "BALSAMIK",
      type: "Formation",
      imgSrc: "img/DigisoudBalsamiq.png",
      imgAlt: "Photo du projet digisound",
      url: "img/Digisoud - Balsamiq.pdf",
    },
    {
      name: "DigiSound",
      support: "FIGMA",
      title: "Projet UI : Maquete Figma",
      description:
        "Création d'une entreprise fictive, de sa charte graphique et mise en place d'une maquette Figma (landing page).",
      type: "Formation",
      imgSrc: "img/DigisoundFigma.png",
      imgAlt: "Photo du projet digisound",
      url: "img/Digisound - Figma.pdf",
    },
  ];

  const [typeFilter, setTypeFilter] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter((project) => {
    if (typeFilter === "all") {
      return true;
    }
    return project.type === typeFilter;
  });

  //Ouverture modale
  const handleOpen = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  //Fermeture modale
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="card_projects">
        <div className="card_filter">
          <div className="item_filter" onClick={() => setTypeFilter("all")}>
            Tous
          </div>
          <div
            className="item_filter"
            onClick={() => setTypeFilter("Professionnel")}
          >
            Professionnel
          </div>
          <div
            className="item_filter"
            onClick={() => setTypeFilter("Formation")}
          >
            Formation
          </div>
        </div>

        {filteredProjects.map((project) => (
          <>
            <div
              className="card_project"
              onClick={() => handleOpen(project)}
              key={project.id}
            >
              <img alt={project.imgAlt} src={project.imgSrc} />
              <div className="card_project_hover">
                <h2>{project.name}</h2>
                <hr noshade="noshade" width="80" />
                <p>{project.support}</p>
              </div>
            </div>
            {showModal && selectedProject && (
              <div className="modal_overlay" onClick={handleClose}>
                <div className="modal">
                  <span onClick={handleClose}>&times;</span>
                  <img
                    alt={selectedProject.imgAlt}
                    src={selectedProject.imgSrc}
                  />
                  <div className="modal_content">
                    <h2>{selectedProject.name}</h2>
                    <hr noshade width="80" align="left" />
                    <p className="support">{selectedProject.support}</p>
                    <p>{selectedProject.title}</p>
                    <p>{selectedProject.description}</p>
                    <a href={selectedProject.url} target="_blank">
                      Voir le projet
                    </a>
                  </div>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
    </>
  );
}
