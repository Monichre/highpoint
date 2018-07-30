import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class Video extends Component {

  ref = player => {
    this.player = player
  }

  render() {
    return (
      <ReactPlayer
        playing
        playsinline
        onMouseEnter={this.props.borderAnimation}
        volume={0}
        muted
        ref={this.ref.bind(this)}
        url={this.props.url}
        className="backgroundVideo"
        height="100%"
        width="100%" />
    )
  }
}

export default Video