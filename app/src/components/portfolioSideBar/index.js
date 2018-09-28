import React from "react";
import MenuLink from "../menuLink";
import { modifiedPropertyTitles } from "../../utils";
import _ from "lodash";

const PortfolioSidebar = ({
  setActivePropertyCard,
  activePropertyCard,
  properties
}) => {
  const modProperties = modifiedPropertyTitles(properties);
  return (
    <div id="sidebar_menu">
      <ul className="sidebar_properties_list">
        <li
          key={"back to top"}
          onClick={e => setActivePropertyCard(0, e)}
          className="menu_link sidebar_link back_to_top"
        >
          Back to Top
        </li>
        {_.sortBy(modProperties, item => item.order).map((property, i) => (
          <MenuLink
            key={i}
            sidebar
            link={property.title}
            index={property.index + 1}
            active={property.index + 2 === activePropertyCard}
            onClick={setActivePropertyCard}
          />
        ))}
      </ul>
    </div>
  );
};

export default PortfolioSidebar;
