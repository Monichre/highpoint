import React, { Component } from 'react'
import { processPortfolioLines, cornerLines } from '../lines'
import Lightbox from 'react-images'
import {Thumb} from '../thumb'
import ScrollReveal from 'scrollreveal'
import AppStore from '../../flux/stores'
import LightBoxTheme from '../lightboxTheme'
import './_gallery.scss'

export default class Gallery extends Component {
  constructor() {
    super()
    this.state = {
      currentImage: 0,
      lightboxIsOpen: false,
      photos: []
    }
  }

  componentDidMount () {
    processPortfolioLines()
    cornerLines()

    const { galleryItems } = AppStore.data
    const gridContainer = document.querySelector('.thumb__scroller')
    const scroller = ScrollReveal()

    scroller.reveal('.grid__item__thumb', {
      origin: 'top',
      container: gridContainer,
      distance: '40px',
      duration: 1000,
      delay: 100
    })

    const photoSet = galleryItems.map((image, i) => {
      let _image = {...image}
      _image.src = image.image
      return _image
    })

    this.setState({
      photos: photoSet
    })
  }
  
  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    })
  }

  openLightbox = (i, e) => {
    e.preventDefault()
    console.log(i)
    this.setState({
      currentImage: i,
      lightboxIsOpen: true
    })
  }

  goToNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1
    })
  }

  goToPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1
    })
  }

    goToImage = index => {
    this.setState({
      currentImage: index
    })
  }
  handleClickImage = () => {
    if (this.state.currentImage === this.props.images.length - 1) return
    this.goToNext()
  }


  render () {
    const { galleryItems } = AppStore.data
    const {photos} = this.state
    return (
      <main className='gallery loading component gallery_component'>
        <h1 style={{textAlign: 'center', textTransform: 'uppercase', fontSize: '55px', letterSpacing: '4px', marginTop: '50px'}}>
          Gallery
        </h1>
        <section className='wrapper'>
          <div className='thumb__scroller'>
            {galleryItems.map((item, i) => (
              <Thumb item={item} key={i} openLightbox={this.openLightbox.bind(this, i)} />
            ))}
          </div>
        </section>
        <Lightbox
              images={photos}
              backdropClosesModal={true}
              onClose={this.closeLightbox}
              onClickPrev={this.goToPrevious}
              onClickNext={this.goToNext}
              onClickImage={this.handleClickImage}
              onClickThumbnail={this.goToImage}
              currentImage={this.state.currentImage}
              isOpen={this.state.lightboxIsOpen}
              theme={LightBoxTheme}
            />
      </main>
    )
  }
}
