import "./NavBar.css";
import Logo from "../../img/logo-white.png";
import { CartWidget } from "../cartwidget/CartWidget";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-xl static-top">
        <div className="container-fluid nav-fill">
          <Link className="navbar-brand" to="/">
            <img src={Logo} className="logo" alt="Logo" />
          </Link>
          <button
            className="navbar-toggler navbar-dark"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse snip1217 menuText navItem w-100"
            id="navbarResponsive"
          >
            <ul className="navbar-nav ml-auto w-100">
              <li className="nav-item">
                <NavLink
                  className="navLink active"
                  activeClassName="activeLink"
                  exact
                  to="/"
                >
                  HOME <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="navLink"
                  activeClassName="activeLink"
                  to="/category/peliculas"
                >
                  PELÍCULAS <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="navLink"
                  activeClassName="activeLink"
                  to="/category/merchandising"
                >
                  MERCHANDISING <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="activeLink"
                  className="navLink"
                  to="/category/parques"
                >
                  PARQUES <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <CartWidget></CartWidget>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
