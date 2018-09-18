import React, { Fragment } from "react";
import ViewProcessButton from "../viewProcessButton";
import { trim, isAVenture } from "../../utils";
import "./_index.scss";

export const VerticalPortfolioCard = ({ property, arrowClick, index }) => (
  <Fragment>
    <h3>{property.title}</h3>
    <div className="vertical__inner">
      <div className="inner_columns">
        <div className="img_cont">
          <div
            className={`img_inner ${
              property.logos && property.logos.length > 0 ? "img_logos" : ""
            }`}
          >
            <img
              src={property.featuredImage.fields.file.url + "?w=500&h=1500"}
              className={`vertical_img ${
                isAVenture(property) ? "is_venture" : ""
              }`}
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
            <p>{trim(property.description)}</p>
            <ViewProcessButton property={property} />
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);
