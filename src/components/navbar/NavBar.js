import "./NavBar.css";
import Logo from "../../img/logov2.png";
import { CartWidget } from "../cartwidget/CartWidget";
import { Link } from 'react-router-dom'


export const NavBar = () => {
  return (
    <div>
      <header className="header">
        <nav className="navigationBar">
          <ul className="navigationLinks">
          <Link exact to='/'><img src={Logo} className="logo"></img></Link>
            <li className="navLink">
              <Link exact to='/'>Home</Link>
            </li>
            <li className="navLink">
            <Link to='/category/peliculas'>Películas</Link>
            </li>
            <li className="navLink">
              <Link to='/category/merchandising'>Merchandising</Link>
            </li>
            <li className="navLink">
            <Link to='/category/parques'>Parques</Link>
            </li>
            <li className="navLink">
            <Link to='/category/cart'>{CartWidget}</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
