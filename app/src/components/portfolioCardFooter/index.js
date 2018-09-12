import React from 'react'
import ViewProcessButton from '../viewProcessButton'

const PortfolioCardFooter = ({property}) => (
    <div className='portfolio_card__details'>
    <footer className={`portfolio_card__footer ${property.isAProcessItem ? 'process_true' : ''}`} />
    <ViewProcessButton property={property} />
  </div>
)

export default PortfolioCardFooter
