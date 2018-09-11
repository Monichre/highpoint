import React from 'react'
import {HorizontalPortfolioCard} from './horizontalCard'
import {VerticalPortfolioCard} from './verticalCard'
import './_portfolioCard.scss'

export const PortfolioCard = ({property, arrowClick, index, property: {featuredImage}}) => (featuredImage.fields.file.details.image.width >= featuredImage.fields.file.details.image.height) ? <HorizontalPortfolioCard index={index} arrowClick={arrowClick} property={property} /> : <VerticalPortfolioCard index={index} arrowClick={arrowClick} property={property} />
