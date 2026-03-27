import { Link } from "react-router-dom"
import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact"
import nnnn from "../assets/nnnn.jpg"

function Accueil() {
  return (
    <>
      
      <section className="hero" id="home">
        <img src={nnnn} alt="Miss" className="profile-img" />

        <h1>Bonjour, je suis <span>Miss Ndour</span> </h1>

        <p className="subtitle">
          Développeuse Web & Mobile
        </p>

        <div className="hero-buttons">
          <Link to="/projects" className="btn">Voir mes projets</Link>
          <Link to="/contact" className="btn-outline">Me contacter</Link>
        </div>
      </section>

      
      <section id="about">
        <About />
      </section>

      
      <section id="projects">
        <Projects />
      </section>

      
      <section id="contact">
        <Contact />
      </section>
    </>
  )
}

export default Accueil