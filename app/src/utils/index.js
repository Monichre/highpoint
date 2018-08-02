import React from 'react'
import ReactPlayer from 'react-player'

export const trim = (str) => {
  console.log(str)
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
    className="about_us_video"
    height="100%"
    width="100%"
  />
)
