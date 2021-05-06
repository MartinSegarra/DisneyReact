import "./NavBar.css";
import Logo from "../../img/logov2.png";
import { CartWidget } from "../cartwidget/CartWidget";
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


export const NavBar = () => {
  return (
    <div>
      <header className="header">
        <nav className="navigationBar">
          <ul className="navigationLinks">
          <Link exact to='/'><img src={Logo} className="logo"></img></Link>
            <li>
              <NavLink activeClassName="activeLink"  className="navLink" exact to='/'>Home</NavLink>
            </li>
            <li >
            <NavLink activeClassName="activeLink" className="navLink" to='/category/peliculas'>Películas</NavLink>
            </li>
            <li >
              <NavLink activeClassName="activeLink" className="navLink" to='/category/merchandising'>Merchandising</NavLink>
            </li>
            <li >
            <NavLink activeClassName="activeLink" className="navLink" to='/category/parques'>Parques</NavLink>
            </li>
            <li >
            <NavLink activeClassName="activeLink" className="navLink" to='/cart'>{CartWidget}</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
