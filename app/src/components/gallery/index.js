import React, { Component } from 'react'
import { processPortfolioLines, cornerLines } from '../lines'
import ReactPlayer from 'react-player'
import ScrollReveal from 'scrollreveal'
import AppStore from '../../flux/stores'
import './_gallery.scss'

export default class Gallery extends Component {
  componentDidMount() {
    processPortfolioLines()
    cornerLines()

    const grid_container = document.querySelector('.thumb__scroller')
    const scroller = ScrollReveal()
    scroller.reveal('.grid__item__thumb', {
      origin: 'top',
      container: grid_container,
      distance: '40px',
      duration: 1000,
      delay: 100
    })
  }

  render() {
    const { galleryItems } = AppStore.data
    console.log(galleryItems)
    return (
      <main className="gallery loading component gallery_component">
        <h1 style={{ textAlign: 'center', textTransform: 'uppercase', fontSize: '45px', letterSpacing: '4px' }}>
          Gallery
        </h1>
        <section className="wrapper">
          <div className="thumb__scroller">
            {galleryItems.map(item => (
              <Thumb item={item} />
            ))}
          </div>
        </section>
      </main>
    )
  }
}

const Thumb = props =>
  props.item.fields.file.url.includes('mp4') ? (
    <div className={`grid__item__thumb `}>
      <ReactPlayer
        playing
        playsinline
        volume={0}
        url={props.item.fields.file.url}
        muted
        className={`gallery_video `}
        height={'100%'}
      />
    </div>
  ) : (
    <div className="grid__item__thumb" data-revealer-color="#8779d2">
      <img src={props.item.fields.file.url} alt="Some image" />
      <div className="bg__wrap">
        <div className="grid__item__bg" style={{ backgroundImage: `url(${props.item.fields.file.url})` }} />
      </div>
    </div>
  )
