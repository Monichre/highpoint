import React, { Component } from 'react'
import AppStore from '../../flux/stores'
import anime from 'animejs'
import './_loader.scss'

export default class Loader extends Component {
  componentDidMount() {
    const cinder_loader_lines = document.querySelector('.cinder_loader_lines')
    const cinderBlockDrawing = anime({
      targets: '.cinder_loader_lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInQuad",
      duration: 3000,
      fill: '#000',
      delay: function(el, i) {
        return i * 3000
      },
      direction:'both',
      loop: 1
    })

    cinderBlockDrawing.complete = () => {
      cinder_loader_lines.classList.add('add_fill')
      this.siteDataReady()
    }
  }

  siteDataReady = () => {
    const {ready} = AppStore.data 
    if(ready) {
      setTimeout(() => {
        this.props.endLoader(true)
      }, 2500)
    }
  }
  
  render() {
    return (
      <div className="loader">
        <svg viewBox="0 0 220.05 195.91" className='cinderblock_loader cinder' height='20px'>
          <g id="cinderLayer" className='cinder_loader_lines' fill="none" fillRule="evenodd" stroke="#000">
            <path d="M202.07,10.29h18V0H0V10.29H22.7a2,2,0,0,1,2,2V178.61a7,7,0,0,1-7,7H0v10.3H220v-10.3h-18a7,7,0,0,1-7-7V17.29A7,7,0,0,1,202.07,10.29ZM147,92.23H72.75a7,7,0,0,1-7-7V17.29a7,7,0,0,1,7-7H147a7,7,0,0,1,7,7V85.23A7,7,0,0,1,147,92.23Zm7,17.29v69.09a7,7,0,0,1-7,7H72.75a7,7,0,0,1-7-7V109.52a7,7,0,0,1,7-7H147A7,7,0,0,1,154,109.52Z" />
          </g>
        </svg>

        <svg
          width="182px"
          height="182px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
          class="uil-ripple">
          <rect x="0" y="0" width="100" height="100" fill="none" class="bk" />
          <g>
            {' '}
            <animate
              attributeName="opacity"
              dur="4s"
              repeatCount="indefinite"
              begin="0s"
              keyTimes="0;0.33;1"
              values="1;1;0"
            />
            <circle cx="50" cy="50" r="40" stroke="#000" fill="none" stroke-width="2" stroke-linecap="round">
              <animate
                attributeName="r"
                dur="4s"
                repeatCount="indefinite"
                begin="0s"
                keyTimes="0;0.33;1"
                values="0;22;44"
              />
            </circle>
          </g>
          <g>
            <animate
              attributeName="opacity"
              dur="4s"
              repeatCount="indefinite"
              begin="2s"
              keyTimes="0;0.33;1"
              values="1;1;0"
            />
            <circle cx="50" cy="50" r="40" stroke="#000" fill="none" stroke-width="2" stroke-linecap="round">
              <animate
                attributeName="r"
                dur="4s"
                repeatCount="indefinite"
                begin="2s"
                keyTimes="0;0.33;1"
                values="0;22;44"
              />
            </circle>
          </g>
        </svg>
      </div>
    )
  }
}
