import React from "react";
import "./_index.scss";

export const HoverLinkIcon = ({ close }) => (
  <div className={`hover-link-icon ${close ? "close" : ""}`}>
    <span />
    <span />
  </div>
);
