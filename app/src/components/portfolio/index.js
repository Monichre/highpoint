import React, { Component, Fragment } from 'react'
import ReactPageScroller from 'react-page-scroller'
import { processPortfolioLines, cornerLines } from '../lines'
import { ArrowsUp, ArrowsDown } from '../icons'
import AppDispatcher from '../../flux/dispatchers'
import { PortfolioGrid } from '../grid/portfolioGrid'
import { PortfolioCard } from '../portfolioCard'
import _ from 'lodash'
// import './_portfolio.scss'

export default class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 0,
      upArrow: false
    }
  }

  componentWillMount() {
    this.setState({
      currentPage: this.props.activePropertyCard
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activePropertyCard !== this.props.activePropertyCard) {
      this._pageScroller.goToPage(nextProps.activePropertyCard)
    }
  }

  componentDidMount() {
    processPortfolioLines()
    cornerLines()
    this._pageScroller.onWheelScroll = this.scrollWheelHandler
  }

  scrollWheelHandler = e => {
    console.log('In scroll handler')
    console.log(e)
  }

  goToPage = (e, i) => {
    e.preventDefault()
    if (i === 1) {
      AppDispatcher.dispatch({
        action: 'go-to-property-card',
        propertyId: i
      })
    }
    this._pageScroller.goToPage(i)
  }

  pageOnChange = number => {
    this.setState({ currentPage: number })
  }

  arrowClick = e => {
    e.preventDefault()
    this.goToPage(e, this.state.currentPage + 1)
  }

  arrowUpClick = e => {
    e.preventDefault()
    this.goToPage(e, 0)
  }

  render() {
    const { properties, aboutUsContent, activePropertyCard } = this.props
    const allVentures = _.sortBy(properties, item => item.order)
    const { currentPage } = this.state

    const FirstSlide = () => (
      <div style={{ height: '100vh', overflow: 'hidden' }}>
        <h1 className='page_title'>
          Portfolio
        </h1>
        <div className="about_us">
          <h4>
            {allVentures.map((property, i) => (
              <span style={{ cursor: 'pointer' }} onClick={e => this.goToPage(e, i)}>
                {property.title} {i === 0 || i === allVentures.length - 1 ? '' : '/'}{' '}
              </span>
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
            <ReactPageScroller
              ref={c => (this._pageScroller = c)}
              pageOnChange={this.pageOnChange}
              onScroll={this.scrollWheelHandler}
              onWheel={this.scrollWheelHandler}>
              {allVentures.map((property, i) => (i === 0 ? property : <PortfolioCard property={property} key={i} />))}
            </ReactPageScroller>
          </PortfolioGrid>
        </section>
        <div className="arrows" style={{ position: 'fixed', bottom: '25px', left: '47%', zIndex: 2000 }}>
          {this.state.currentPage === 0 || this.state.currentPage === 1 ? (
            <ArrowsDown onClick={this.arrowClick} />
          ) : null}
        </div>
      </main>
    )
  }
}
