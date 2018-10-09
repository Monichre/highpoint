import React from "react";
import { FancyButton } from "./fancyButton";

import "./_index.scss";

const ViewProcessButton = ({ property }) =>
  property.isAProcessItem ? <FancyButton property={property} /> : null;

export default ViewProcessButton;
