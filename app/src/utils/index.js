import React from 'react'
import ReactPlayer from 'react-player'

export const trim = (str) => {
  if (str.length > 250) {
    let trimmed = str.split('')
    trimmed.length = 250
    trimmed.push('...')
    trimmed.join('')
    return trimmed
  }
}

const imageOrVideo = ({ video, img }) =>
  video === null ? (
    <img src={img.file.url} />
  ) : (
    <ReactPlayer
      playing
      playsinline
      volume={0}
      muted
      url={video}
      className='about_us_video'
      height='100%'
      width='100%'
    />
  )

export const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time))
