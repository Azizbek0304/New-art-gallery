import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const links = [
  { to: '/', text: 'Bosh Sahifa', icon: 'fas fa-tachometer-alt' },
  { to: '/about', text: 'Biz Haqimizda', icon: 'far fa-address-book' },
  { to: '/digitaldesign', text: 'Raqamli Dizayn', icon: 'far fa-clone' },
  { to: '/photo', text: 'Fotosurat', icon: 'far fa-chart-bar' },
  { to: '/branding', text: 'Brending', icon: 'far fa-copy' },
  { to: '/drawings', text: "Qo'lda Chizilgan rasmlar", icon: 'far fa-copy' },
  { to: '/rating', text: 'Reyting', icon: 'far fa-copy' },
  { to: '/contact', text: "Bog'lanish", icon: 'far fa-copy' },
];

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    updateActiveTabStyle();
  }, [location]);

  function updateActiveTabStyle() {
    var tabsNewAnim = document.getElementById('navbarSupportedContent');
    var selectorNewAnim = tabsNewAnim.getElementsByTagName('li').length;
    var activeItemNewAnim = tabsNewAnim.querySelector('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.clientHeight;
    var activeWidthNewAnimWidth = activeItemNewAnim.clientWidth;
    var itemPosNewAnimTop = activeItemNewAnim.offsetTop;
    var itemPosNewAnimLeft = activeItemNewAnim.offsetLeft;
    var horiSelector = document.querySelector('.hori-selector');

    horiSelector.style.top = itemPosNewAnimTop + 'px';
    horiSelector.style.left = itemPosNewAnimLeft + 'px';
    horiSelector.style.height = activeWidthNewAnimHeight + 'px';
    horiSelector.style.width = activeWidthNewAnimWidth + 'px';
  }

  return (
      <nav className="navbar navbar-expand-custom navbar-mainbg">
        <Link className="navbar-brand navbar-logo" to="/">
          Raqamli Gallereya
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={updateActiveTabStyle}
        >
          <i className="fas fa-bars text-white"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            {links.map((link) => (
              <li key={link.to} className={`nav-item ${location.pathname === link.to ? 'active' : ''}`}>
                <Link className="nav-link" to={link.to}>
                  <i className={link.icon}></i>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
  );
};

export default Navbar;
