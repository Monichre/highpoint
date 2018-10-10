import React from "react";
import { BROWSER } from "../../utils/browser";
import DefaultPortfolio from "./defaultPortfolio";
import IEPortfolio from "./iePortfolio";

const Portfolio = props =>
  BROWSER.isExplorer ? (
    <IEPortfolio {...props} />
  ) : (
    <DefaultPortfolio {...props} />
  );

export default Portfolio;
