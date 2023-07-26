import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-left">
        <button>Kevin Zheng</button>
      </div>
      <div className="nav-right">
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
      </div>
    </nav>
  );
}

export default Navbar;
