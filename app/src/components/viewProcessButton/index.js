import React from "react";
import { AlternateButton } from "./alternateButton";
import { FancyButton } from "./fancyButton";

const ViewProcessButton = ({ property }) =>
  property.isAProcessItem ? <FancyButton property={property} /> : null;

export default ViewProcessButton;
