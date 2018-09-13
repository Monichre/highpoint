import React from 'react'

const VideoControlButton = ({onClick, children}) => (
  <span className='video_control_button' onClick={onClick}>
    {children}
  </span>
)

export default VideoControlButton
