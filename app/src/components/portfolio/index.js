import React, { Component } from 'react'
import { processPortfolioLines, cornerLines } from '../lines'
import {PortfolioGrid} from '../grid/portfolio'
import {PortfolioCard} from './portfolioCard'
import './_portfolio.scss'

export default class Portfolio extends Component {

  componentDidMount() {
    processPortfolioLines()
    cornerLines()
  }

  render() {
    
    const {properties} = this.props
    console.log(properties)
  
    return (
      <main className="portfolio component portfolio_component">
      <h1 style={{textAlign: 'center', textTransform: 'uppercase', letterSpacing: '2px'}}>Portfolio</h1>
        <section className={`wrapper`}>
        <PortfolioGrid>
          {properties.map((property) => (
            <PortfolioCard property={property} />
          ))}
        </PortfolioGrid>
        </section>
      </main>
    )
  }
}


