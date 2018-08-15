import React, { Component } from 'react'
import Portfolio from '../components/portfolio'
import AppStore from '../flux/stores'


class PortfolioPage extends Component {
  render() {
    const {properties, companyContent} = AppStore.data
    const aboutUsContent = companyContent.find(content => content.title === 'About Us')
    return (
      <div className="portfolio">
        <Portfolio properties={properties} aboutUsContent={aboutUsContent} />
      </div>
    )
  }
}

export default PortfolioPage

