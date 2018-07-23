import React, { Component } from 'react'
import Portfolio from '../components/portfolio'
import AppStore from '../flux/stores'
import {config, animated } from 'react-spring'

const about = {
  title: 'About Us',
  description: {
    description: `Highpoint Property Group is a New York City real estate developer, operator, owner and manager with a primary focus on residential and mixed-use assets throughout the Tri-State area. 
    We officially opened our office in January of 2017 and closed on our first deal in February of 2017. Since this time, in a rapid yet measured pace, Highpoint is on contract on, owns interests in, operates, or is developing 13 New York City properties representing over $250 million of value.
    Our joint venture partnerships have included institutional investors as well as high net worth individuals and family office partners. In addition, we have tremendously well-established relationships with many major and leading lending institutions.
    We are a vertically integrated firm that has expertise in every aspect of the development process. The Executive Team at Highpoint has nearly 40 years’ worth of New York City real estate experience - investing in and directing over $600 million of real estate acquisitions, over $1 billion of debt and equity transactions, and developing over 3 million square feet.
    We are young, scrappy, hungry, aggressive, and disciplined – and we believe that these are the qualities that lead to superior risk-adjusted returns.
    We realize potential.  We create value.  
    At the forefront of our business is a passion for real estate.  Benefitting from our laser-focused approach to meticulous deliveries of technically complex opportunistic and value-add programs, our properties are best-in-class. Our goal is to create the highest quality product for the market, the best experience for our end users, and outsized project returns to our investors.`
  },
  featuredImage: {
    resolutions: {

    },
    file: {
      url: '/video/iron-branding.mp4'
    }
  },
  video: '/video/iron-branding.mp4',
  isProcessItem: false,
}

class PortfolioPage extends Component {
  render() {
    console.log(AppStore)
    const {properties} = AppStore.data
    properties.unshift(about)
    
    console.log(properties)
    return (
      <animated.div  style={{ ...this.props.style }}v className="portfolio">
      <Portfolio properties={properties} />
      </animated.div>
    )
  }
}

export default PortfolioPage

