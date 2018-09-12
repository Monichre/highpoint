import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import CinderBlockSVG from './cinderblock'
import anime from 'animejs'

export default class CinderBlockWithAnimation extends Component {
  componentDidMount () {
    const cinderLines = document.querySelector('.cinder_lines')
    const cinderBlockDrawing = anime({
      targets: '.cinder_lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInQuad',
      duration: 3000,
      fill: '#000',
      delay: function (el, i) {
        return i * 1000
      },
      direction: 'both',
      loop: 1
    })

    cinderBlockDrawing.complete = () => {
      cinderLines.classList.add('add_fill')
    }
  }
  render () {
    const { linkTo, className, ...rest } = this.props
    return (
      <div className={`cinderblock_container ${className}`}>
        <Link to={linkTo}>
          <CinderBlockSVG {...rest} />
        </Link>
      </div>
    )
  }
}
