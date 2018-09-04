import React from 'react'
import {HorizontalPortfolioCard} from './horizontalCard'
import {VerticalPortfolioCard} from './verticalCard'
import './_portfolioCard.scss'

export const PortfolioCard = ({property, property: {featuredImage}}) => (featuredImage.fields.file.details.image.width > featuredImage.fields.file.details.image.height) ? <HorizontalPortfolioCard property={property} /> : <VerticalPortfolioCard property={property} />
