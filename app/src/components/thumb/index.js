import React from 'react'
import ReactPlayer from 'react-player'

export const Thumb = props => props.item.image.includes('mp4') ? (
  <div className={`grid__item__thumb `} onClick={props.openLightbox}>
    <ReactPlayer
      playing
      playsinline
      volume={0}
      url={props.item.image}
      muted
      className={`gallery_video `}
      height={'100%'}
    />
    <div className='overlay__inner_container'>
      <div className='inner'>
        <h3>{props.item.property}</h3>
        <p>{props.item.address}</p>
      </div>
    </div>
  </div>
) : (
  <div className='grid__item__thumb' data-revealer-color='#8779d2' onClick={props.openLightbox}>
    <img src={props.item.image} alt='Some image' />
    <div className='bg__wrap'>
      <div className='grid__item__bg' style={{ backgroundImage: `url(${props.item.image})` }} />
    </div>
    <div className='overlay__inner_container'>
      <div className='inner'>
        <h3>{props.item.property}</h3>
        <p>{props.item.address}</p>
      </div>
    </div>
  </div>
)
