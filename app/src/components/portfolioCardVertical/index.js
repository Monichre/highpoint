import React, { Fragment } from "react";
import ViewProcessButton from "../viewProcessButton";
import { trim, isAVenture, mcCallisterStyle } from "../../utils";

import "./_index.scss";

export const VerticalPortfolioCard = ({ property, arrowClick, index }) => (
  <Fragment>
    <h3>{property.title}</h3>
    <div className={`vertical__inner`}>
      <div className="inner_columns">
        <div
          className={`img_cont ${
            property.title === "McCallister Management"
              ? "mcCallister_management"
              : ""
          } ${property.isAProcessItem ? "" : "isNotAProcessItem"}`}
          style={mcCallisterStyle(property)}
        >
          <div
            className={`img_inner ${
              property.logos && property.logos.length > 0 ? "img_logos" : ""
            }`}
          >
            <img
              alt={`${property.title} featured image`}
              src={
                property.title === "McCallister Management"
                  ? "/logos/mccallister-logo.svg"
                  : property.featuredImage.fields.file.url + "?w=500&h=1500"
              }
              className={`vertical_img ${
                isAVenture(property) ? "is_venture" : ""
              }`}
            />

            {property.logos && property.logos.length > 0 ? (
              <PropertyCardVentureLogos property={property} />
            ) : null}
          </div>
        </div>
        <div className="content">
          <h4>{property.address}</h4>
          <p>{trim(property.description)}</p>
          <ViewProcessButton property={property} />
        </div>
      </div>
    </div>
  </Fragment>
);

const PropertyCardVentureLogos = ({ property }) => (
  <div className="logos">
    {property.logos && property.logos.length > 0
      ? property.logos.map((logo, i) => (
          <img
            key={i}
            src={logo.fields.file.url}
            className={`venture_logo__thumb`}
            alt={`${property.title} venture logo`}
          />
        ))
      : null}
  </div>
);
