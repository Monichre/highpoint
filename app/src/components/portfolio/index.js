import React, { Component } from 'react'
import { processPortfolioLines, cornerLines } from '../lines'
import { PortfolioGrid } from '../grid/portfolio'
import { PortfolioCard } from './portfolioCard'
import './_portfolio.scss'

export default class Portfolio extends Component {
  componentDidMount() {
    processPortfolioLines()
    cornerLines()
  }

  render() {
    const { properties, aboutUsContent } = this.props

    return (
      <main className="portfolio component portfolio_component">
        <h1 style={{ textAlign: 'center', textTransform: 'uppercase', fontSize: '45px', letterSpacing: '4px' }}>
          Portfolio
        </h1>
        <div className='about_us'>
        <h4>
          {properties.map(property => (
            <span>{property.title} / </span>
          ))}
        </h4>
        <div className="text">
          <p>{aboutUsContent.content}</p>
        </div>
        </div>
      
        <section className={`wrapper`}>
          <PortfolioGrid>
            {properties.sort(property => !property.isAProcessItem - property.isAProcessItem).map(property => (
              <PortfolioCard property={property} />
            ))}
          </PortfolioGrid>
        </section>
      </main>
    )
  }
}
