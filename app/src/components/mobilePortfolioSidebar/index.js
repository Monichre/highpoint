import React from "react";
import MenuLink from "../menuLink";
import _ from "lodash";
import { modifiedPropertyTitles } from "../../utils";
import "./_index.scss";

const MobilePortfolioSidebar = ({
  setActivePropertyCard,
  activePropertyCard,
  properties
}) => {
  const modProperties = modifiedPropertyTitles(properties);

  return (
    <div id="mobile_sidebar_menu">
      <ul className="sidebar_properties_list">
        <li
          key={"back to top"}
          onClick={e => setActivePropertyCard(0, e)}
          className="menu_link sidebar_link back_to_top"
        >
          Back to Top
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
