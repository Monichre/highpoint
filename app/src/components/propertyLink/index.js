import React from "react";
import { HoverLinkIcon } from "../hoverLinkIcon";
import "./_index.scss";

const PropertiesLink = ({ className }) => (
  <div className={`properties_link ${className}`}>
    <div className={`text`}>
      <span className="u-shadow">Properties</span>
    </div>
    <HoverLinkIcon className={className} />
  </div>
);

export default PropertiesLink;
