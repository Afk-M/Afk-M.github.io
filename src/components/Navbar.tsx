import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav id="navbar">
      <ul>
        <li><Link to="/home">about</Link></li>
        {/* <li><Link to="/about">About</Link></li> */}
        <li><Link to="/projects">projects</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
