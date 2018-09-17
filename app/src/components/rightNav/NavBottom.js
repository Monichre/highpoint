import React, { Fragment } from "react";
import { Info } from "../icons";

const listItems = (
  <Fragment>
    <li>
      <span className="">Developer</span>
    </li>
    <li>
      <span className="">Owner</span>
    </li>
    <li>
      <span className="">Operator</span>
    </li>
  </Fragment>
);

const NavBottom = ({ isMobile }) => (
  <ul className={`bottom ${isMobile ? "is_mobile" : ""}`}>
    {isMobile ? <Info /> : { listItems }}
  </ul>
);

export default NavBottom;
