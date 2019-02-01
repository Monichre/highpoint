import React from "react";

export const FancyButton = ({ property }) => (
  <button className="fancy_button">
    <a href={`/process/${property.title}`}>View Process</a>
    <div className="button__horizontal" />
    <div className="button__vertical" />
  </button>
);

export const FancyButtonCustomURL = ({ url }) => (
  <button className="fancy_button">
    <a rel="noopener" target="_blank" href={url}>
      View Site
    </a>
    <div className="button__horizontal" />
    <div className="button__vertical" />
  </button>
);
