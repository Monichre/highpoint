import React from 'react'
import { HorizontalPortfolioCard } from './horizontalCard'
import { VerticalPortfolioCard } from './verticalCard'
import { BROWSER } from '../../utils/browser'
import './_portfolioCard.scss'

export const PortfolioCard = ({property, arrowClick, index, property: {featuredImage}}) => {
  if (BROWSER.isMobile() || (featuredImage.fields.file.details.image.width >= featuredImage.fields.file.details.image.height)) {
    return <HorizontalPortfolioCard index={index} arrowClick={arrowClick} property={property} />
  } else {
    return <VerticalPortfolioCard index={index} arrowClick={arrowClick} property={property} />
  }
}
