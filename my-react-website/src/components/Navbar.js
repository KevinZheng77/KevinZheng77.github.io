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
        <a href="https://github.com/KevinZheng77" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/kevinzheng06217/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:kevinzheng621@gmail.com">Email</a>
      </div>
    </nav>
  );
}

export default Navbar;
