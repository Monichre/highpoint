import React from "react";
import { CardArrowDown } from "../icons";

const ArrowButton = ({ arrowClick, index }) => (
  <span className="card_arrow_down" onClick={e => arrowClick(e, index)}>
    <CardArrowDown />
  </span>
);

export default ArrowButton;
