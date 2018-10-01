import React from "react";

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
      <div className="hover-link-icon">
        <span />
        <span />
      </div>
    </li>
  );
};

export default HoverLink;
