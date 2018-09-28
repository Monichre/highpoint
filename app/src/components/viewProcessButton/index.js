import React from "react";
import { FancyButton } from "./fancyButton";
import { BROWSER } from "../../utils/browser";
import "./_index.scss";

const { status, isPhone } = BROWSER.isMobile();

const ConditionalAddress = ({ property }) =>
  isPhone ? (
    <h4 className="process_button__property-address">{property.address}</h4>
  ) : null;

const ViewProcessButton = ({ property }) =>
  property.isAProcessItem ? (
    <FancyButton property={property} />
  ) : (
    <ConditionalAddress property={property} />
  );

export default ViewProcessButton;
