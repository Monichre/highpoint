import React from "react";
import MenuLink from "../menuLink";
import CinderBlock from "../cinderblock";
import ContactLink from "../contactLink";
import { links } from "../../links";

const DefaultLeftNav = () => (
  <div className="inner component">
    <ul style={{ listStyle: "none" }} className="top">
      <li className="logo_link" style={{ width: "100%" }}>
        <CinderBlock
          context="navigation"
          linkTo="/"
          id="cinderblock_navigation"
        />
      </li>
    </ul>
    <ul className="middle">
      {links.map((link, i) => (
        <MenuLink key={i} link={link} />
      ))}
    </ul>
    <ul className="bottom">
      <ContactLink />
    </ul>
  </div>
);

export default DefaultLeftNav;
