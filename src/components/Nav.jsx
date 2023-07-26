import { NavLink } from "react-router-dom";
import logo from "../img/logo.png";

function Nav() {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 me-3 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link active" aria-current="page">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/people" className="nav-link" aria-current="page">
                People
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/paths" className="nav-link" aria-current="page">
                Paths
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" aria-current="page">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
