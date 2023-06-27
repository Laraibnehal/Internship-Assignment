import React from 'react';
import './styles.css';

const Navbar = () => {
  return (
    <div className="navbar glassmorph">
      <p className="logo">
        <span>Letz</span>Learn
      </p>
      <div>
        <a href="/" className="nav-items">
          Home
        </a>
        <a href="/" className="nav-items">
          About Us
        </a>
        <a href="/" className="nav-items">
          Products & Services
          <i
            className="fa-solid fa-chevron-down"
            style={{
              marginLeft: '5px',
            }}
          ></i>
        </a>
        <a href="/" className="nav-items">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Navbar;
