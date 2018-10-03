// import React from 'react'
// import { HoverLinkIcon } from './hoverLinkIcon'

// const ContactLink = ({ link }) => (
//   <li className={`hover-link contact`}>
//     <div className={`text`}>
//       <a href="mailto:info@highpointpg.com" className="u-shadow">
//         {link}
//       </a>
//     </div>
//     <HoverLinkIcon />
//   </li>
// )

// const HoverLink = ({ link, className, onClick }) => {
//   const handleClick = e => {
//     e.preventDefault()
//     e.stopPropagation()
//     onClick()
//   }
//   return link === 'Contact' ? (
//     <ContactLink link={link} />
//   ) : (
//     <PropertiesLink
//       handleClick={handleClick}
//       className={className}
//       link={link}
//     />
//   )
// }

// export default HoverLink

import React from "react";
import "./_index.scss";

export const HoverLinkIcon = ({ className }) => (
  <div className={`hover-link-icon ${className}`}>
    <span />
    <span />
  </div>
);
