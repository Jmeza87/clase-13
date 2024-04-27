import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
<nav className="navbar navbar-expand-lg bg-menu">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={"/inicio"} className="nav-link active" aria-current="page" href="#">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link to={"/nosotros"} className="nav-link" href="#">Nosotros</Link>
        </li>

        <li className="nav-item">
          <Link to={"/productos"} className="nav-link" href="#">Productos</Link>
        </li>

        <li className="nav-item">
          <Link to={"/servicios"} className="nav-link" href="#">Servicios</Link>
        </li>

        <li className="nav-item">
          <Link to={"/contactos"} className="nav-link" href="#">Contactos</Link>
        </li>
        

        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

  )
}

export default Header