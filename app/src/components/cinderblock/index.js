import React, { Component } from 'react'
import anime from 'animejs'

export default class CinderBlock extends Component {
  componentDidMount() {

    const cinderLines = document.querySelector('.cinder_lines')
    const cinderBlockDrawing = anime({
      targets: '.cinder_lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInQuad",
      duration: 3000,
      fill: '#000',
      delay: function(el, i) {
        return i * 1000
      },
      direction:'both',
      loop: 1
    })

    cinderBlockDrawing.complete = () => {
      cinderLines.classList.add('add_fill')
    }
  }
  render() {
    return (
      <div className="cinderblock_container">
        <svg viewBox="0 0 220.05 195.91" className='cinderblock cinder'>
          <g id="cinderLayer" className='cinder_lines' fill="none" fillRule="evenodd" stroke="#000">
            <path d="M202.07,10.29h18V0H0V10.29H22.7a2,2,0,0,1,2,2V178.61a7,7,0,0,1-7,7H0v10.3H220v-10.3h-18a7,7,0,0,1-7-7V17.29A7,7,0,0,1,202.07,10.29ZM147,92.23H72.75a7,7,0,0,1-7-7V17.29a7,7,0,0,1,7-7H147a7,7,0,0,1,7,7V85.23A7,7,0,0,1,147,92.23Zm7,17.29v69.09a7,7,0,0,1-7,7H72.75a7,7,0,0,1-7-7V109.52a7,7,0,0,1,7-7H147A7,7,0,0,1,154,109.52Z" />
          </g>
        </svg>
      </div>
    )
  }
}
