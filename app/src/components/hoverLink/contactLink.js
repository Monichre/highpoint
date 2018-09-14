import React from "react";

export const PropertyLink = ({
  className,
  onClick,
  addHoverClass,
  removeHoverClass,
  link
}) => (
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
