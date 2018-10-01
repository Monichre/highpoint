import React from "react";
import ViewProcessButton from "../viewProcessButton";
import { isAVenture } from "../../utils";
import { BROWSER } from "../../utils/browser";
import MobileCardFooter from "../portfolioCardFooter/mobileCardFooter";
import "./_index.scss";

const { isPhone } = BROWSER.isMobile();
const mcCallisterStyle = property =>
  property.title === "McCallister Management"
    ? {
        backgroundImage: `url(/logos/mccallister.svg)`
      }
    : null;

export const MobilePropertyCard = ({ property }) => (
  <div
    className={`mobile_card__inner ${
      property.title === "McCallister Management"
        ? "mcCallister_management"
        : ""
    }`}
    style={mcCallisterStyle(property)}
  >
    <h3>
      {property.isAProcessItem && isPhone ? (
        <span className="property_address">{property.address}</span>
      ) : null}
      {property.title}
    </h3>
    <div className="inner_card">
      <div
        className={`img_cont ${
          isAVenture(property) ? "is_highpoint_venture" : ""
        }`}
      >
        <img
          src={
            property.title === "McCallister Management"
              ? "/logos/mccallister-logo.svg"
              : property.featuredImage.fields.file.url + "?w=2000&h=1000"
          }
          className={isAVenture(property) ? "is_venture" : ""}
          alt={`${property.title} featured image`}
        />
      </div>
      <div className="content">
        <h4>{property.address}</h4>
        <ViewProcessButton property={property} />
      </div>
    </div>
    <MobileCardFooter />
  </div>
);
