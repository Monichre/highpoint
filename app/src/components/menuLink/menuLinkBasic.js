import React from "react";
import { Link } from "react-router-dom";

export const MenuLinkBasic = ({ link, mobileSidebar }) => (
  <li className={`menu_link ${mobileSidebar ? "mobile_sidebar_link" : ""}`}>
    <Link to={`/${link.toLowerCase()}`}>
      {mobileSidebar ? link : <span className="u-shadow">{link}</span>}
    </Link>
  </li>
);
