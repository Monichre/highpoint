import React, { Component } from 'react'
import { emitter } from '../../eventEmitter'
import { VideoLogo } from '../videoLogo'
import Footer from '../footer'
import { cornerLines, homePageLines } from '../lines'
import anime from 'animejs'
import './_home.scss'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      muted: true,
      launchFullVideo: true,
      url: 'https://player.vimeo.com/external/285014911.hd.mp4?s=b54412138c16c77670c289e53e4e53376f9fa51c&profile_id=175',
      videos: ['https://player.vimeo.com/external/285014911.hd.mp4?s=b54412138c16c77670c289e53e4e53376f9fa51c&profile_id=175', '/video/iron-branding.mp4']
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

    
    backgroundVideo.addEventListener('click', e => {
      e.preventDefault()
      e.stopPropagation()
      this.setState({ launchFullVideo: true }, () => {
        this.launchFullVideo()
        emitter.emit('event:fullscreen-video-launched', { data: true })
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

  launchFullVideo = () => {
    const video = document.querySelector('.backgroundVideo video')
    const footer = document.querySelector('.footer')
    const background = document.querySelector('.backgroundVideo')

    video.classList.toggle('launch__full')
    footer.classList.add('launch__full')
    background.classList.toggle('launch__full')

    this.setState({
      muted: false
    })
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
        />
      </div>
    )
  }
}
