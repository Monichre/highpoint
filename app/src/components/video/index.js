import React from 'react'
import ReactPlayer from 'react-player'

export default props => (
  <ReactPlayer
    onClick={props.launchFullVideo}
    playing
    playsinline
    loop={true}
    volume={props.muted ? 0 : 1}
    muted={props.muted}
    url={props.url}
    className="backgroundVideo"
    height="100%"
    width="100%"
  />
)
