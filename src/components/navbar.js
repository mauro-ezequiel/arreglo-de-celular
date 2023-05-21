import React from 'react';
import '../style/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <button className="nav-button" onClick={() => window.location.href = '/ruta1'}>reparation</button>
      <button className="nav-button" onClick={() => window.location.href = '/ruta2'}>telephones</button>
      <button className="nav-button" onClick={() => window.location.href = '/ruta3'}>accessories</button>
      <button className="nav-button" onClick={() => window.location.href = '/ruta4'}>information</button>
      <button className="nav-button" onClick={() => window.location.href = '/ruta5'}>contact</button>
    </nav>
  );
};

export default Navbar;
