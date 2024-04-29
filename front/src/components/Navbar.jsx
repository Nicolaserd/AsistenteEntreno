import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/corriendo.png"
import "./Navbar.css"

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const toggleMenu = () => {
        setOpen(!open);
      };
  return (
   <header className="header">
    <a href="/" className="logo">
      <img src={logo}/>
    </a>

    <input type="checkbox" id="check" />
    <label htmlFor="check" className="icons" onClick={toggleMenu}>
      <div className={`menu-btn ${open ? 'open' : ''}`}>
        <div className="hamburger"></div>
      </div>
    </label>
    <nav className="navbar">
      <a href="/redes" className="navItem" style={{ '--i': 0 }}>Personas</a>
      <a href="/videos" className="navItem" style={{ '--i': 1 }}>Videos</a>
      <a href="/contacto" className="navItem" style={{ '--i': 2 }}>Contacto</a>
    </nav>
  </header>

   
  )
}

export default Navbar;