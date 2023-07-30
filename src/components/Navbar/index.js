import React, { useState, useEffect } from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState(null);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleResize = () => {
    if (activeNavItem) {
      const horiSelector = document.querySelector('.hori-selector');
      horiSelector.style.top = activeNavItem.offsetTop + 'px';
      horiSelector.style.left = activeNavItem.offsetLeft + 'px';
      horiSelector.style.height = activeNavItem.offsetHeight + 'px';
      horiSelector.style.width = activeNavItem.offsetWidth + 'px';
    }
  };

  const handleNavItemClick = (event) => {
    const selectedNavItem = event.target.closest('.nav-item');
    setActiveNavItem(selectedNavItem);
    handleResize();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">
      <a className="navbar-brand navbar-logo" href="/">
        Web Solutions
      </a>

      <button
        className="navbar-toggler"
        onClick={handleResize}
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-white"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector"></div>

          <li
            className={`nav-item ${activeNavItem === 'Home' ? 'active' : ''}`}
          >
            <a className="nav-link" href="/" onClick={handleNavItemClick}>
              <i className="fas fa-tachometer-alt"></i>Home
            </a>
          </li>

          <li
            className={`nav-item ${activeNavItem === 'About' ? 'active' : ''}`}
          >
            <a
              className="nav-link"
              href="/about"
              exact
              onClick={handleNavItemClick}
            >
              <i className="far fa-address-book"></i>About
            </a>
          </li>

          <li
            className={`nav-item ${
              activeNavItem === 'Services' ? 'active' : ''
            }`}
          >
            <a
              className="nav-link"
              href="/service"
              onClick={handleNavItemClick}
            >
              <i className="far fa-clone"></i>Services
            </a>
          </li>

          <li
            className={`nav-item ${
              activeNavItem === 'Testimonial' ? 'active' : ''
            }`}
          >
            <a
              className="nav-link"
              href="/testimonial"
              onClick={handleNavItemClick}
            >
              <i className="far fa-chart-bar"></i>Testimonial
            </a>
          </li>

          <li
            className={`nav-item ${
              activeNavItem === 'Contact Us' ? 'active' : ''
            }`}
          >
            <a
              className="nav-link"
              href="/contact"
              onClick={handleNavItemClick}
            >
              <i className="far fa-copy"></i>Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
