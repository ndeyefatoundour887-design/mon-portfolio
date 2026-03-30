import { Link } from "react-router-dom"
import projet1 from "../assets/market.jpg"
import projet2 from "../assets/folio.jpg"
import projet3 from "../assets/ges.jpg"

function Projects() {

  const projects = [
    {
      id: 1,
      title: "Mini Market",
      image: projet1,
    },
    {
      id: 2,
      title: "Portfolio",
      image: projet2,
    },
    {
      id: 3,
      title: "Gestion des tâches",
      image: projet3,
    }
  ]

  return (
    <section className="projects">
      <h2>Mes projets</h2>

      <div className="projects-grid">
        {projects.map((projects) => (
          <div className="project-card" key={projects.id}>
            <img src={projects.image} alt={projects.title} />
            <h3>{projects.title}</h3>
            <div className="project-buttons">
           <Link to={`/projets/${projects.id}`} className="btn">
                Voir détails
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects