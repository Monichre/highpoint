import React, { Component, Fragment } from 'react'
import ReactPageScroller from 'react-page-scroller'
import { processPortfolioLines, cornerLines } from '../lines'
import {ArrowsUp, ArrowsDown} from '../icons'
import { PortfolioGrid } from '../grid/portfolio'
import { PortfolioCard } from '../portfolioCard'
import _ from 'lodash'
import './_portfolio.scss'

export default class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 0,
      upArrow: false
    }
  }

  componentDidMount() {
    processPortfolioLines()
    cornerLines()
    console.log(this)
  }

  goToPage = (e, i) => {
    console.log(i)
    console.log(e)
    e.preventDefault()
    this._pageScroller.goToPage(i)
  }

  pageOnChange = (number) => {
    this.setState({ currentPage: number })
  }

  arrowClick = (e) => {
    console.log(e)
    e.preventDefault()
    this.goToPage(e, this.state.currentPage + 1)
  }

  arrowUpClick = (e) => {
    console.log(e)
    e.preventDefault()
    this.goToPage(e, 0)
  }

  render() {
    const { properties, aboutUsContent } = this.props
    const allVentures = _.sortBy(properties, item => item.order)
    let {currentPage} = this.state
    

    const FirstSlide = () => (
      <div style={{ height: '100vh', overflow: 'hidden' }}>
        <h1
          style={{
            textAlign: 'center',
            textTransform: 'uppercase',
            fontSize: '55px',
            letterSpacing: '4px',
            position: 'relative',
            top: '20px'
          }}>
          Portfolio
        </h1>
        <div className="about_us">
          <h4>
            {allVentures.map((property, i) => (
              <span style={{cursor: 'pointer'}} onClick={e => this.goToPage(e, i)}>{property.title} {(i === 0 || i === allVentures.length - 1) ? '' : '/'} </span>
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
        <div className='arrows' style={{position: 'fixed', bottom: '30px', left: '45px', zIndex: 2000}}>
          {
            (this.state.currentPage === 0 || this.state.currentPage === 1) ? <ArrowsDown onClick={this.arrowClick} /> : <ArrowsUp onClick={this.arrowUpClick} />
          }
        </div>
      </main>
    )
  }
}
