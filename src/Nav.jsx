import { Link, NavLink } from "react-router";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/generador_Inventario_lab/">
          Página principal
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className={`nav-link ${({ isActive }) => isActive ? "active" : ""}`} aria-current="page" to="/generador_Inventario_lab/material">
                Agregar Materiales
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}