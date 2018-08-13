import React, { Component } from 'react'
import CinderBlock from '../cinderblock'
import { Next, Prev, Play } from '../icons'
import './_footer.scss'
import { emitter } from '../../eventEmitter'

class Footer extends Component {
  state = {
    launchFullScreenMenu: false
  }

  clickHandler = e => {
    console.log(e)
    e.preventDefault()
    e.stopPropagation()
    const skews = Array.from(document.querySelectorAll('.skew'))
    const nav = document.querySelector('.footer_nav')
    nav.classList.contains('showing') ? nav.classList.remove('showing') : nav.classList.add('showing')
  }

  handleHover = e => {
    console.log(e)
    console.log(e.target.getAttribute('data-target-attribute'))
    const element = document.querySelector(`.${e.target.getAttribute('data-target-attribute')}`)
    element.classList.add('hovering')
  }

  handleHoverLeave = e => {
    console.log(e)
    console.log(e.target.getAttribute('data-target-attribute'))
    const element = document.querySelector(`.${e.target.getAttribute('data-target-attribute')}`)
    element.classList.remove('hovering')
  }

  componentDidMount() {
    // const _this = this

    // emitter.subscribe('event:fullscreen-video-launched', data => {
    //   console.log(data)
    //   console.log('This is the subscribe method callback')
    //   _this.setState({
    //     launchFullScreenMenu: true
    //   })
    // })

  }

  render() {
    const radialPane1 = this.props.launchFullVideo ? (
      <p className="skew_gallery">
        <span onClick={this.props.prevVideo}><Prev /></span>
      </p>
    ) : (
      <p className="skew_gallery">Gallery</p>
    )
    const radialPane2 = this.props.launchFullVideo ? (
      <p className="skew_portfolio">
        <span onClick={this.props.playOrPause}><Play /></span>
      </p>
    ) : (
      <p className="skew_portfolio">Portfolio</p>
    )
    const radialPane3 = this.props.launchFullVideo ? (
      <p className="skew_process">
        <span onClick={this.props.nextVideo}><Next /></span>
      </p>
    ) : (
      <p className="skew_process">Process</p>
    )

    return (
      <div className="footer">
        <nav className="footer_nav">
          <div className="container">
            <div
              className="skew"
              data-target-attribute={'skew_gallery'}
              onMouseLeave={this.handleHoverLeave}
              onMouseEnter={this.handleHover}
            />
            <div
              className="skew"
              data-target-attribute={'skew_portfolio'}
              onMouseLeave={e => this.handleHoverLeave(e)}
              onMouseEnter={e => this.handleHover(e)}
            />
            <div
              className="skew"
              data-target-attribute={'skew_process'}
              onMouseLeave={e => this.handleHoverLeave(e)}
              onMouseEnter={e => this.handleHover(e)}
            />
            {radialPane1}
            {radialPane2}
            {radialPane3}
          </div>
        </nav>
        <div className="burger" onClick={this.clickHandler}>
          <CinderBlock />
        </div>
      </div>
    )
  }
}

export default Footer
