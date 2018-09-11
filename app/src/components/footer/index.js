import React, { Component } from 'react'
import CinderBlock from '../cinderblock'
import VideoIcon from '../videoIcon'
import { Next, Prev, Play } from '../icons'
import { MorphReplace } from 'react-svg-morph'

class Footer extends Component {
  state = {
    launchFullScreenMenu: true
  }

  componentWillMount() {
    this.setState({
      activeIcon: this.props.activeIcon
    })
  }

  clickHandler = e => {
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

  render() {
    const radialPane1 = this.props.launchFullVideo ? (
      <p className="skew_gallery">
        <span onClick={this.props.prevVideo}>
          <Prev />
        </span>
      </p>
    ) : (
      <p className="skew_gallery">Gallery</p>
    )
    const radialPane2 = this.props.launchFullVideo ? (
      <p className="skew_portfolio">
        <span onClick={this.props.playOrPause}>
          <Play />
        </span>
      </p>
    ) : (
      <p className="skew_portfolio">Portfolio</p>
    )
    const radialPane3 = this.props.launchFullVideo ? (
      <p className="skew_process">
        <span onClick={this.props.nextVideo}>
          <Next />
        </span>
      </p>
    ) : (
      <p className="skew_process">Process</p>
    )

    console.log(this.props)
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
          <MiniCinder />
        </div>
      </div>
    )
  }
}

export default Footer

const MiniCinder = () => (
  <div className="cinderblock_container">
    <svg viewBox="0 0 220.05 195.91" className="mini_cinderblock">
      <g id="cinderLayer" className="cinder_lines" fill="#000" fillRule="evenodd" stroke="#000">
        <path d="M202.07,10.29h18V0H0V10.29H22.7a2,2,0,0,1,2,2V178.61a7,7,0,0,1-7,7H0v10.3H220v-10.3h-18a7,7,0,0,1-7-7V17.29A7,7,0,0,1,202.07,10.29ZM147,92.23H72.75a7,7,0,0,1-7-7V17.29a7,7,0,0,1,7-7H147a7,7,0,0,1,7,7V85.23A7,7,0,0,1,147,92.23Zm7,17.29v69.09a7,7,0,0,1-7,7H72.75a7,7,0,0,1-7-7V109.52a7,7,0,0,1,7-7H147A7,7,0,0,1,154,109.52Z" />
      </g>
    </svg>
  </div>
)
