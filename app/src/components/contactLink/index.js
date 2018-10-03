import React from "react";
import { HoverLinkIcon } from "../hoverLinkIcon";
import "./_index.scss";

const ContactLink = ({ link }) => (
  <li className={`contact_link`}>
    <div className={`text`}>
      <a href="mailto:info@highpointpg.com" className="u-shadow">
        Contact
      </a>
    </div>
    <HoverLinkIcon />
  </li>
);

export default ContactLink;
