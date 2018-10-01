import React from "react";
import { CardArrowDown } from "../icons";
import { BROWSER } from "../../utils/browser";

const { isPhone } = BROWSER.isMobile();

const ArrowButton = ({ arrowClick, index }) => (
  <span className="card_arrow_down" onClick={e => arrowClick(e, index)}>
    <CardArrowDown />
  </span>
);

const PortfolioCardContainer = ({
  children,
  property,
  arrowClick,
  index,
  className
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        padding: "2% 0"
      }}
    >
      <div className={`portfolio_card portfolio_card--full ${className}`}>
        {children}
        <ArrowButton arrowClick={arrowClick} index={index} />
      </div>
    </div>
  );
};

export default PortfolioCardContainer;
