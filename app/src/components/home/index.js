import React, { Component } from 'react'
import { emitter } from '../../eventEmitter'
import { VideoLogo } from '../videoLogo'
import Footer from '../footer'
import { cornerLines, homePageLines } from '../lines'
import anime from 'animejs'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      muted: true,
      launchFullVideo: true,
      url: 'https://player.vimeo.com/external/286249741.sd.mp4?s=0ba1a7ff1be8fe5f7c0bf90006d04f53041c1310&profile_id=165',
      activeIcon: 'cinderblock'
    }
  }
  componentDidMount() {
    homePageLines()
    cornerLines()

    const logo_rects = Array.from(document.querySelectorAll('.clip__path__line'))
    const inner_logo_rects = Array.from(document.querySelectorAll('.inner_logo_line'))
    const lines = document.querySelector('.lines')
    const backgroundVideo = document.querySelector('.backgroundVideo')
    const border = document.querySelector('.border')
    const inner_svg = document.querySelector('.border .inner svg')

    
    inner_svg.addEventListener('mouseover', () => {
      this.setState({
        activeIcon: 'videoIcon'
      })
    })
    inner_svg.addEventListener('mouseleave', () => {
      this.setState({
        activeIcon: 'cinderblock'
      })
    })

    const mainLineDrawing = anime({
      targets: '.inner .lines .main_path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 200,
      delay: function(el, i) {
        return i * 250
      },
      loop: 1
    })

    const subDrawing = anime({
      targets: '.inner .lines .sub_path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 200,
      delay: function(el, i) {
        return i * 250
      },
      loop: 1
    })

    mainLineDrawing.begin = () => {
      inner_logo_rects.forEach(rect => rect.classList.add('active'))
    }

    mainLineDrawing.complete = () => {
      border.classList.add('active')
      lines.classList.add('active')

      setTimeout(() => {
        inner_svg.classList.add('fadeOut')
        backgroundVideo.classList.add('fadeIn')
        logo_rects.forEach(rect => rect.classList.add('active'))
      }, 1500)
    }
  }


  prevVideo = e => {
    const { videos, url } = this.state
    this.setState({
      url: videos[1]
    })
  }
  playOrPause = e => {
    console.log(e)
  }
  nextVideo = e => {
    const { videos, url } = this.state
    this.setState({
      url: videos[1]
    })
  }

  render() {
    return (
      <div className="home component">
        <VideoLogo muted={this.state.muted} url={this.state.url} />
        <Footer
          launchFullVideo={this.state.launchFullVideo}
          prevVideo={this.prevVideo}
          playOrPause={this.playOrPause}
          nextVideo={this.nextVideo}
          activeIcon={this.state.activeIcon}
        />
      </div>
    )
  }
}
