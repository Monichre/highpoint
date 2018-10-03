import React from "react";
import { HoverLinkIcon } from "../../hoverLinkIcon";

const MobileNavTrigger = ({ toggleMobile }) => (
  <li className={`hover-link menu-trigger`} onClick={toggleMobile}>
    <HoverLinkIcon />
  </li>
);

export default MobileNavTrigger;
