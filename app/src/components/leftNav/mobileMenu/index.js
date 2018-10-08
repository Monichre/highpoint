import React from "react";
import { Close } from "../../icons";
import { MobileMenuLink } from "../mobileMenuLink";
import Modal from "../../modal";
import CinderBlockSVG from "../../cinderblock/cinderblock";
import "./_index.scss";

const MobileMenu = ({ links, toggleMenu }) => (
  <Modal>
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
          <div className="mobile-menu__item-inner trigger_close">
            <button
              className="menu-trigger menu-trigger--close"
              onClick={toggleMenu}
            >
              <Close color="#fff" />
            </button>
          </div>
        </div>
      </div>

      <div className="mobile-menu__item">
        <div className="mobile-menu__item-bg mobile-menu__item-bg--4" />
      </div>

      <div className="mobile-menu__item">
        <div className="mobile-menu__item-bg mobile-menu__item-bg--5" />
        <a href="/" className="mobile-menu__link mobile-menu__item-content">
          <CinderBlockSVG />
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

      {links.reverse().map((link, i) => (
        <MobileMenuLink link={link} i={i} />
      ))}
    </nav>
  </Modal>
);

export default MobileMenu;
