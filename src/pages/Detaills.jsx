import { useParams } from "react-router-dom"
import projet1 from "../assets/market.jpg"
import projet2 from "../assets/folio.jpg"
import projet3 from "../assets/ges.jpg"

function DetailProjet() {
  const { id } = useParams()

  const projets = [
    {
      id: 1,
      title: "Mini Market",
      description:
        "Application e-commerce moderne développée avec React et Laravel.",
      image: projet1,
      link: "https://github.com/missndour/mini-market",
    },
    {
      id: 2,
      title: "Portfolio",
      description:
        "Portfolio professionnel responsive avec React et Vercel.",
      image: projet2,
      link: "https://github.com/missndour/mini-market-portfolio",
    },
    {
      id: 3,
      title: "Gestion des tâches",
      description:
        "Application React pour organiser les tâches et améliorer la productivité.",
      image: projet3,
      link: "https://github.com/missndour/gestion-taches",
    },
  ]

  const projet = projets.find((p) => p.id === Number(id))

  if (!projet) {
    return <h2>Projet introuvable</h2>
  }

  return (
    <section className="detail-project">
      <img src={projet.image} alt={projet.title} />
      <h1>{projet.title}</h1>
      <p>{projet.description}</p>

              <a
                href={projet.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Voir sur GitHub
              </a>
    </section>
  )
}

export default DetailProjet