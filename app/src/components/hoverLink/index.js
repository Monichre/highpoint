import React from "react";

const HoverLink = ({ link, className, onClick, isMobile }) => {
  const addHoverClass = ({ e: target }) => {
    const burgerIcon = document.querySelector(".hover-link-icon");
    burgerIcon.classList.add("hovering");
  };

  const removeHoverClass = ({ e: target }) => {
    const burgerIcon = document.querySelector(".hover-link-icon");
    burgerIcon.classList.remove("hovering");
  };

  const handleClick = e => {
    console.log(e);
    e.preventDefault();
    e.stopPropagation();
    onClick();
  };
  return (
    <li className={`hover-link ${className}`} onClick={e => handleClick(e)}>
      <div
        className={`text`}
        onMouseEnter={e => addHoverClass(e)}
        onMouseLeave={e => removeHoverClass(e)}
      >
        {isMobile && link === "Contact" ? null : (
          <span className="u-shadow">{link}</span>
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
