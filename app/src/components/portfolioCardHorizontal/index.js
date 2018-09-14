import React from "react";
import ViewProcessButton from "../viewProcessButton";
import { isAVenture } from "../../utils";

export const HorizontalPortfolioCard = ({ property }) => (
  <div className="inner horizontal__inner">
    <h3>{property.title}</h3>
    <div className="img_cont">
      <div
        className={`img_inner ${
          property.logos && property.logos.length > 0 ? "img_logos" : ""
        }`}
      >
        <img
          src={property.featuredImage.fields.file.url + "?w=2000&h=1000"}
          className={isAVenture(property) ? "is_venture" : ""}
        />
        <div className="logos">
          {property.logos && property.logos.length > 0
            ? property.logos.map(logo => (
                <img
                  src={logo.fields.file.url}
                  className={`venture_logo__thumb`}
                />
              ))
            : null}
        </div>
      </div>
    </div>
    <div className="content">
      <div className="sub_title">
        <h4>{property.address}</h4>
      </div>
      <div className="text">
        <p>{property.description}</p>
        <ViewProcessButton property={property} />
      </div>
    </div>
  </div>
);
