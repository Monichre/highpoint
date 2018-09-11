import React from 'react'
import ReactPlayer from 'react-player'

export const Thumb = ({ openLightbox, item: { address, url, isAVenture, media, property } }) =>
  media === 'video' ? (
    <div className={`grid__item__thumb video_thumb`} onClick={openLightbox}>
      <ReactPlayer playing playsinline volume={0} url={url} muted className={`gallery_video `} height={'100%'} />
      <div className='overlay__inner_container'>
        <div className='inner'>
          <h3>{property}</h3>
          <p>{address}</p>
        </div>
      </div>
    </div>
  ) : (
    <div className={`grid__item__thumb img_thumb ${isAVenture ? 'venture_thumb' : ''}`} data-revealer-color='#8779d2' onClick={openLightbox}>
      <img src={url} alt='Some image' />
      <div className='bg__wrap'>
        <div className='grid__item__bg' style={{ backgroundImage: `url(${url})` }} />
      </div>
      <div className='overlay__inner_container'>
        <div className='inner'>
          <h3>{property}</h3>
          <p>{address}</p>
        </div>
      </div>
    </div>
  )
