import React from "react";
import MenuLink from "../menuLink";
import _ from "lodash";
import { modifiedPropertyTitles } from "../../utils";
import { HoverLinkIcon } from "../hoverLink/hoverLinkIcon";
import "./_index.scss";

const MobilePortfolioSidebar = ({
  setActivePropertyCard,
  activePropertyCard,
  properties,
  toggleSideBar
}) => {
  const modProperties = modifiedPropertyTitles(properties);

  return (
    <div id="mobile_sidebar_menu">
      <ul className="sidebar_properties_list">
        <li key={"back to top"} className="menu_link sidebar_link back_to_top">
          <div className="left_side" onClick={e => setActivePropertyCard(0, e)}>
            Back to Top
          </div>
          <div className="close_menu_side" />
        </li>
        {_.sortBy(modProperties, item => item.order).map(property => (
          <MenuLink
            key={property.index}
            sidebar
            link={property.title}
            index={property.index + 1}
            actve={property.index + 2 === activePropertyCard}
            onClick={setActivePropertyCard}
          />
        ))}
      </ul>
    </div>
  );
};

export default MobilePortfolioSidebar;
