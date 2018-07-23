import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import { processPortfolioLines } from '../lines'
import Selectors from '../selectors'
import Panel from '../panel'

import './_portfolio.scss'

export default class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeID: 0,
      img: this.props.properties[0].featuredImage,
      video: this.props.properties[0].video ? this.props.properties[0].video : null
    }
  }
  changeActive = id => {
    console.log(id)
    console.log(this.props)
    this.setState({
      activeID: id,
      img: this.props.properties[id].featuredImage,
      video: this.props.properties[id].video ? this.props.properties[id].video : null
    })
  }

  componentDidMount() {
    processPortfolioLines()
  }

  render() {
    const { img, video } = this.state
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

    console.log(this.state)
    return (
      <main className="portfolio component portfolio_component">
        <section
          className={`wrapper ${
            img.resolutions.height > img.resolutions.width && video === null ? 'portrait' : 'landscape'
          }`}>
          <div
            className={`wrapper_inner ${
              img.resolutions.height > img.resolutions.width && video === null ? 'portrait' : 'landscape'
            }`}>
            {imageOrVideo(this.state)}
          </div>
          <Selectors items={this.props.properties} activeID={this.state.activeID} _changeActive={this.changeActive} />
          <Panel
            item={this.props.properties[this.state.activeID]}
            className={this.state.activeID === 0 ? 'initial' : 'regular'}
            type={'portfolio'}
          />
        </section>
      </main>
    )
  }
}


