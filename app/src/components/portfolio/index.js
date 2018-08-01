import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import { processPortfolioLines, cornerLines } from '../lines'
import {PortfolioGrid} from '../grid/portfolio'
import {PortfolioCard} from './portfolioCard'
import './_portfolio.scss'

export default class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
    
    }
  }

  componentDidMount() {
    processPortfolioLines()
    cornerLines()
  }

  render() {
    
    const {properties} = this.props
    console.log(properties)
    const imageOrVideo = ({ video, img }) =>
      video === null ? (
        <img src={img.file.url} />
      ) : (
        <ReactPlayer
          playing
          playsinline
          volume={0}
          muted
          url={video}
          className="about_us_video"
          height="100%"
          width="100%"
        />
      )

      // className={`wrapper ${
      //   img.resolutions.height > img.resolutions.width && video === null ? 'portrait' : 'landscape'
      // }`}
    return (
      <main className="portfolio component portfolio_component">
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


