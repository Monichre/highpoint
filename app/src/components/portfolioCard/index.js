import React from "react";
import { HorizontalPortfolioCard } from "../portfolioCardHorizontal";
import { VerticalPortfolioCard } from "../portfolioCardVertical";
import PortfolioCardContainer from "./portfolioCardContainer";
import PortfolioCardFooter from "../portfolioCardFooter";
import { BROWSER } from "../../utils/browser";
// import './_portfolioCard.scss'

export const PortfolioCard = ({
  mobileStatus,
  property,
  arrowClick,
  index,
  property: { featuredImage }
}) => {
  if (BROWSER.isExplorer || BROWSER.isEdge) {
    return (
      <PortfolioCardContainer arrowClick={arrowClick} className="vertical">
        <VerticalPortfolioCard
          index={index}
          arrowClick={arrowClick}
          property={property}
        />
      </PortfolioCardContainer>
    );
  } else if (
    mobileStatus ||
    featuredImage.fields.file.details.image.width >
      featuredImage.fields.file.details.image.height
  ) {
    return (
      <PortfolioCardContainer arrowClick={arrowClick} className="horizontal">
        <HorizontalPortfolioCard
          index={index}
          arrowClick={arrowClick}
          property={property}
        />
        <PortfolioCardFooter property={property} />
      </PortfolioCardContainer>
    );
  } else {
    return (
      <PortfolioCardContainer arrowClick={arrowClick} className="vertical">
        <VerticalPortfolioCard
          index={index}
          arrowClick={arrowClick}
          property={property}
        />
        <PortfolioCardFooter property={property} />
      </PortfolioCardContainer>
    );
  }
};
