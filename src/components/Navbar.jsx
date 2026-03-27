import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">Portfolio</div>

      <div className="menu">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/project">Project</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

    </nav>
  )
}

export default Navbar