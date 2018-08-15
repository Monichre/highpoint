import React, { Component, Fragment } from 'react'
import ReactPageScroller from 'react-page-scroller'
import { processPortfolioLines, cornerLines } from '../lines'
import { PortfolioGrid } from '../grid/portfolio'
import { PortfolioCard } from '../portfolioCard'
import _ from 'lodash'
import './_portfolio.scss'

export default class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 0
    }
  }

  componentDidMount() {
    processPortfolioLines()
    cornerLines()
    console.log(this)
  }

  goToPage = eventKey => {
    this._pageScroller.goToPage(eventKey)
  }

  pageOnChange = number => {
    console.log(number)
    this.setState({ currentPage: number })
  }

  render() {
    const { properties, aboutUsContent } = this.props
    const allVentures = _.sortBy(properties, item => item.order)
    const FirstSlide = () => (
      <div style={{ height: '100vh' }}>
        <h1
          style={{
            textAlign: 'center',
            textTransform: 'uppercase',
            fontSize: '45px',
            letterSpacing: '4px',
            position: 'relative',
            top: '50px'
          }}>
          Portfolio
        </h1>
        <div className="about_us">
          <h4>
            {allVentures.map(property => (
              <span>{property.title} / </span>
            ))}
          </h4>
          <div className="text">
            <p>{aboutUsContent.content}</p>
          </div>
        </div>
      </div>
    )
    allVentures.unshift(<FirstSlide />)

    return (
      <main className="portfolio component portfolio_component">
        <section className={`wrapper`}>
          <PortfolioGrid>
            <ReactPageScroller ref={c => (this._pageScroller = c)} pageOnChange={this.pageOnChange}>
              {allVentures.map((property, i) => (i === 0 ? property : <PortfolioCard property={property} key={i} />))}
            </ReactPageScroller>
          </PortfolioGrid>
        </section>
      </main>
    )
  }
}
