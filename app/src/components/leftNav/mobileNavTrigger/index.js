import React from "react";

const MobileNavTrigger = ({ toggleMobile }) => (
  <li className={`hover-link menu-trigger`} onClick={toggleMobile}>
    <div className={`text`} />
    <div className="hover-link-icon">
      <span />
      <span />
    </div>
  </li>
);

export default MobileNavTrigger;
