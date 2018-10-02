import React from "react";
import { HoverLinkIcon } from "../../hoverLink/hoverLinkIcon";

const MobileNavTrigger = ({ toggleMobile }) => (
  <li className={`hover-link menu-trigger`} onClick={toggleMobile}>
    <div className={`text`} />
    <HoverLinkIcon />
  </li>
);

export default MobileNavTrigger;
