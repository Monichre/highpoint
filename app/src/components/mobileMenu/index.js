import React from "react";
import { Close } from "../icons";
// import { Link } from 'react-router-dom'

import "./_index.scss";

const MobileMenu = ({ links, toggleMenu }) => (
  <nav className="mobile-menu">
    <div className="mobile-menu__item">
      <div className="mobile-menu__item-bg mobile-menu__item-bg--1" />
    </div>

    <div className="mobile-menu__item">
      <div className="mobile-menu__item-bg mobile-menu__item-bg--2" />
    </div>
    <div className="mobile-menu__item">
      <div className="mobile-menu__item-bg mobile-menu__item-bg--3" />
      <div className="mobile-menu__item-content">
        <div className="mobile-menu__item-inner">
          <button
            className="menu-trigger menu-trigger--close"
            onClick={toggleMenu}
          >
            <Close />
          </button>
        </div>
      </div>
    </div>

    <div className="mobile-menu__item">
      <div className="mobile-menu__item-bg mobile-menu__item-bg--4" />
    </div>

    <div className="mobile-menu__item">
      <div className="mobile-menu__item-bg mobile-menu__item-bg--5" />
      <a
        href="#content-1"
        className="mobile-menu__link mobile-menu__item-content"
      >
        <div className="mobile-menu__item-inner">
          <h3 className="mobile-menu__item-title" />
        </div>
      </a>
    </div>
    <div className="mobile-menu__item">
      <div className="mobile-menu__item-bg mobile-menu__item-bg--6" />
      <a
        href="#content-1"
        className="mobile-menu__link mobile-menu__item-content"
      >
        <div className="mobile-menu__item-inner">
          <h3 className="mobile-menu__item-title" />
        </div>
      </a>
    </div>

    {links.map((link, i) => (
      <MobileMenuLink link={link} i={i} />
    ))}
  </nav>
);

const MobileMenuLink = ({ link, i }) => (
  <div className="mobile-menu__item">
    <div className={`mobile-menu__item-bg mobile-menu__item-bg--${i}`} />
    <div className={`mobile-menu__item-img mobile-menu__item-img--${i}`} />
    <a
      href={`#content-${i}`}
      className="mobile-menu__link mobile-menu__item-content"
    >
      <div className="mobile-menu__item-inner">
        <h3 className="mobile-menu__item-title">{link}</h3>
        <span className="mobile-menu__item-desc" />
      </div>
    </a>
    <div
      className={`mobile-menu__item-bg mobile-menu__item-bg-cover mobile-menu__item-bg--${i}`}
    />
  </div>
);

const MobileMenuLinkWithImage = ({ link, i }) => (
  <div className="mobile-menu__item">
    <div className="mobile-menu__item-bg mobile-menu__item-bg--9" />
    <div
      className="mobile-menu__item-img mobile-menu__item-img--4"
      style={{
        backgroundImage: "url(logos/logo-full.svg)",
        backgroundSize: "80%",
        backgroundPosition: "center"
      }}
    />
    <a
      href={`#content-${i}`}
      className="mobile-menu__link mobile-menu__item-content"
    >
      <div className="mobile-menu__item-inner">
        <h3 className="mobile-menu__item-title">{link}</h3>
        <span className="mobile-menu__item-desc" />
      </div>
    </a>
    <div className="mobile-menu__item-bg mobile-menu__item-bg-cover mobile-menu__item-bg--9" />
  </div>
);

export default MobileMenu;
