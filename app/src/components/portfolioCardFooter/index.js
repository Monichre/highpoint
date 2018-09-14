import React from "react";
import { CornerIcon } from "./cornerIcon";

const PortfolioCardFooter = ({ property }) => (
  <div className="portfolio_card__details">
    <footer className={`portfolio_card__footer process_false`} />
    <CornerIcon />
  </div>
);

export default PortfolioCardFooter;
