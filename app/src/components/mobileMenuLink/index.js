import React from "react";
import { Link } from "react-router-dom";

export const MobileMenuLink = ({ link, i }) => (
  <div className="mobile-menu__item">
    <div className={`mobile-menu__item-bg mobile-menu__item-bg--${i}`} />
    <div className={`mobile-menu__item-img mobile-menu__item-img--${i}`} />
    <Link
      to={`/${link.toLowerCase()}`}
      className="mobile-menu__link mobile-menu__item-content"
    >
      <div className="mobile-menu__item-inner">
        <h3 className="mobile-menu__item-title">{link}</h3>
        <span className="mobile-menu__item-desc" />
      </div>
    </Link>
    <div
      className={`mobile-menu__item-bg mobile-menu__item-bg-cover mobile-menu__item-bg--${i}`}
    />
  </div>
);

export const MobileMenuLinkWithImage = ({ link, i }) => (
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
