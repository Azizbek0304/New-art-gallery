import React, { useEffect } from 'react';
import './navbar.css';
import { Outlet, Link } from 'react-router-dom';
import $ from 'jquery';

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
  function animation() {
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $('.hori-selector').css({
      top: itemPosNewAnimTop.top + 'px',
      left: itemPosNewAnimLeft.left + 'px',
      height: activeWidthNewAnimHeight + 'px',
      width: activeWidthNewAnimWidth + 'px',
    });
    $('#navbarSupportedContent').on('click', 'li', function (e) {
      $('#navbarSupportedContent ul li').removeClass('active');
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $('.hori-selector').css({
        top: itemPosNewAnimTop.top + 'px',
        left: itemPosNewAnimLeft.left + 'px',
        height: activeWidthNewAnimHeight + 'px',
        width: activeWidthNewAnimWidth + 'px',
      });
    });
  }

  useEffect(() => {
    animation();
    $(window).on('resize', function () {
      setTimeout(function () {
        animation();
      }, 500);
    });
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-mainbg">
        <Link className="navbar-brand navbar-logo" to="/" exact>
          Web Solutions
        </Link>

        <button
          className="navbar-toggler"
          onClick={function () {
            setTimeout(function () {
              animation();
            });
          }}
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
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>

            {links.map((link) => (
              <li key={link.to} className="nav-item">
                <Link className="nav-link" to={link.to} exact>
                  <i className={link.icon}></i>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
