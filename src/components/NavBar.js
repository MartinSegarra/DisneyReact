import React from 'react';
import '../App.css';
import Logo from '../img/logo.png'

const NavBar = () => {
    return (
        <div >
        <header className="header">
            <img src={Logo} className="logo"></img>
             
         <nav className="navigationBar">
            <ul className="navigationLinks">
                 <li className = "navLink"><a href="">Home</a></li>
                 <li className = "navLink"><a href="">Parques</a></li>
                 <li className = "navLink"><a href="">Merchandising</a></li>
                 <li className = "navLink"><a href="">Películas</a></li>
                 <li className = "navLink"><a href="">Disney+</a></li>
             </ul>
         </nav>
         </header>
         </div>
    )
 }


 export default NavBar
