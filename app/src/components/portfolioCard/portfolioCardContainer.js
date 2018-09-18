import React from "react";
// import { CardArrowDown } from '../icons'

const PortfolioCardContainer = ({
  children,
  property,
  arrowClick,
  index,
  className
}) => (
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
    </div>
    {/* <CardArrowDown index={index} onClick={arrowClick} /> */}
  </div>
);

export default PortfolioCardContainer;
