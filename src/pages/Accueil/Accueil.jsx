import "./_accueil.css";
export default function Accueil({}) {
  const SoftSkills = [
    "Autonomie",
    "Curiosité",
    "Créativité",
    "Patience et Problem Solving",
    "Esprit d'équipe",
  ];

  const HardSkills = [
    {
      skills: [
        {
          name: "Front-End",
          skill: ["HTML", "CSS", "SASS", "Twig", "JavaScript"],
        },
        {
          name: "Back-End",
          skill: ["PHP", "MySQL"],
        },
        {
          name: "Framework",
          skill: ["ReactJS", "Symfony", "Bootstrap"],
        },
        {
          name: "CMS",
          skill: ["PrestaShop", "WordPress"],
        },
      ],
    },
  ];

  return (
    <>
      <div className="card">
        <div className="card_presentation">
          <h2>Mon parcours</h2>
          <p>
            Aprés 5 années d'expériences dans le secteur du sanitaire et
            sociale, et de la restauration, je me suis toujours retrouvée
            confrontée à un seul et même problème : <span>la routine</span>.{" "}
            <br />
            <br />
            En quête de nouvelles expériences, j’ai recherché un métier de
            passion, qui pourrait concilier ma curiosité, ma créativité et mon
            envie d'apprendre. C'est ainsi que j'ai découvert le métier de
            &#10024;développeuse web &#10024;.
            <br />
            <br />
            J'ai alors suivis une formation de developpeur web et web mobile à
            l'école Diginamic à Perols (Titre RNCP niveau 5 / BAC +2) où j'ai
            acquis les bases du developpement Web et ainsi mettre ce savoir en
            pratique lors des differents projets de formation.
            <br />
            <br />
            Je suis actuellement à la recherche d'une entreprise pouvant
            m'accueillir au plus vite et jusqu'en mars 2024 dans le cadre d'un
            contrat d'alternance.
          </p>
          <h2>Soft Skills</h2>
          <ul>
            {SoftSkills.map((skills) => (
              <>
                <li>{skills}</li>
              </>
            ))}
          </ul>
        </div>
        <div className="card_personal">
          <img src={require("../../img/PicsJR.jpg")} alt="Photo de Justine" />
          <p className="name">Justine Ragues</p>
          <p>26 ans &#x2022; Montpellier</p>
          <p className="citation">
            "Codez toujours comme si la personne qui allait maintenir votre code
            était un violent psychopathe qui sait où vous habitez. ― John Woods"
          </p>
          <a href="img/CV-Ragues.pdf" className="link" target="_blank">
            <ion-icon name="download-outline"></ion-icon> Téléchargez mon CV
          </a>
        </div>
      </div>
      <div className="card_skills">
        <div className="skills">
          <div>
            <ul>
              <li className="skills_cat">
                &#128154; <br /> Le developpement web est devenu pour moi, une
                véritable passion qui me pousse à me depasser.
              </li>
              <li className="skills_cat">
                &#128269; <br /> Je reste toujours en quête des bonnes pratiques
                afin de produire un code de qualité.
              </li>
              <li className="skills_cat">
                &#128064; <br /> Je me tiens au courant des dernières nouveautés
                techniques grâce à une veille quotidienne.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card_skills card_skills--Secondary">
        <h2>Hard Skills</h2>
        <div className="skills">
          {HardSkills.map((skills) => (
            <>
              {skills.skills.map((skill) => (
                <>
                  <div className="skills_cat skills_cat--Secondary">
                    <h3>{skill.name}</h3>
                    <ul>
                      {skill.skill.map((s) => (
                        <li>{s}</li>
                      ))}
                    </ul>
                  </div>
                </>
              ))}
            </>
          ))}
        </div>
      </div>
    </>
  );
}