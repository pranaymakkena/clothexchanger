import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">ClothExchanger</div>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/swap">Swap</a>
      </div>
    </nav>
  );
};

export default Navbar;