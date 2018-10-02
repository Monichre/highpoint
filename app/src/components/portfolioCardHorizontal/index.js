import React from "react";
import ViewProcessButton from "../viewProcessButton";
import { isAVenture } from "../../utils";
import { BROWSER } from "../../utils/browser";
import { FancyButtonCustomURL } from "../viewProcessButton/fancyButton";
import "./_index.scss";

const { isPhone, status } = BROWSER.isMobile();
const mcCallisterStyle = property =>
  property.title === "McCallister Management"
    ? {
        backgroundImage: `url(/logos/mccallister.svg)`
      }
    : null;

export const HorizontalPortfolioCard = ({ property }) => (
  <div
    className={`inner horizontal__inner ${
      property.title === "McCallister Management"
        ? "mcCallister_management"
        : ""
    } ${property.isAProcessItem ? "" : "isNotAProcessItem"}`}
    style={mcCallisterStyle(property)}
  >
    <h3>
      {property.isAProcessItem && status ? (
        <span className="property_address">{property.address}</span>
      ) : null}
      {property.title}
    </h3>
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
      {property.logos && property.logos.length > 0 ? (
        <Logos property={property} />
      ) : null}
    </div>
    <div className="content">
      <div className="sub_title">
        <h4>{property.address}</h4>
      </div>
      <div className="text">
        <p>{property.description}</p>
        <ViewProcessButton property={property} />
        {property.title === "McCallister Management" ? (
          <FancyButtonCustomURL url={"http://mccallistergroup.net/"} />
        ) : null}
      </div>
    </div>
  </div>
);

const Logos = ({ property }) => (
  <div className="logos">
    {property.logos.map((logo, i) => (
      <img
        key={i}
        src={logo.fields.file.url}
        className={`venture_logo__thumb`}
        alt={`${property.title} logo`}
      />
    ))}
  </div>
);
