import React from "react";
import { HoverLinkIcon } from "./hoverLinkIcon";

const HoverLink = ({ link, className, onClick, isMobile }) => {
  const handleClick = e => {
    e.preventDefault();
    e.stopPropagation();
    onClick();
  };
  return (
    <li className={`hover-link ${className}`} onClick={e => handleClick(e)}>
      <div className={`text`}>
        {isMobile && link === "Contact" ? null : (
          <a href="mailto:info@highpointpg.com" className="u-shadow">
            {link}
          </a>
        )}
      </div>
      <HoverLinkIcon />
    </li>
  );
};

export default HoverLink;
