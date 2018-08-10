import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class Video extends Component {

  ref = player => {
    this.player = player
  }

  render() {
    return (
      <ReactPlayer
        onClick={this.props.launchFullVideo}
        playing
        playsinline
        loop={true}
        onMouseEnter={this.props.borderAnimation}
        volume={this.props.muted ? 0 : 1}
        muted={this.props.muted}
        playbackRate={.5}
        ref={this.ref.bind(this)}
        url={this.props.url}
        className="backgroundVideo"
        height="100%"
        width="100%" />
    )
  }
}

export default Video