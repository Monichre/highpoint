import React from "react";
import { Link } from "react-router-dom";

export const FancyButton = ({ property }) => (
  <button className="fancy_button">
    <a href={`/process/${property.title}`}>View Process</a>
    <div className="button__horizontal" />
    <div className="button__vertical" />
  </button>
);

export const FancyButtonCustomURL = ({ url }) => (
  <button className="fancy_button">
    <a href={url}>View Venture</a>
    <div className="button__horizontal" />
    <div className="button__vertical" />
  </button>
);
