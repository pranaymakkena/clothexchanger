import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h1>Cloth Exchanger</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/swap">Swap Clothes</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
