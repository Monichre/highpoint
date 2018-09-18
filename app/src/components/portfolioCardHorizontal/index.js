import React from "react";
import ViewProcessButton from "../viewProcessButton";
import { isAVenture } from "../../utils";
import "./_index.scss";

export const HorizontalPortfolioCard = ({ property }) => (
  <div className="inner horizontal__inner">
    <h3>{property.title}</h3>
    <div className="img_cont">
      <img
        src={property.featuredImage.fields.file.url + "?w=2000&h=1000"}
        className={isAVenture(property) ? "is_venture" : ""}
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
      </div>
    </div>
  </div>
);

const Logos = ({ property }) => (
  <div className="logos">
    {property.logos.map(logo => (
      <img
        src={logo.fields.file.url}
        className={`venture_logo__thumb`}
        alt={`${property.title} logo`}
      />
    ))}
  </div>
);
