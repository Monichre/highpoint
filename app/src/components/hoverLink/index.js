import React from "react";

const HoverLink = ({ link, className, onClick }) => {
  const addHoverClass = ({ e: target }) => {
    const burgerIcon = document.querySelector(".hover-link-icon");
    burgerIcon.classList.add("hovering");
  };
  const removeHoverClass = ({ e: target }) => {
    const burgerIcon = document.querySelector(".hover-link-icon");
    burgerIcon.classList.remove("hovering");
  };
  return (
    <li className={`hover-link ${className}`} onClick={onClick}>
      <div
        className={`text`}
        onMouseEnter={e => addHoverClass(e)}
        onMouseLeave={e => removeHoverClass(e)}
      >
        <span className="u-shadow">{link}</span>
      </div>
      <div className="hover-link-icon">
        <span />
        <span />
      </div>
    </li>
  );
};

export default HoverLink;
