import React from 'react'
import './_grid.scss'

export const PortfolioGrid = (props) => (
  <div className="grid portfolio_grid"> 
    {props.children}
  </div>
)
