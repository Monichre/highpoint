import React, {Component, Fragment} from 'react'
import Lightbox from 'react-images'
import LightBoxTheme from '../../lightboxTheme'
import './_four-rows.scss'


export default class FourRowGrid extends Component {
  constructor() {
    super()
    this.state = {
      currentImage: 0,
      lightboxIsOpen: false,
      photos: []
    }
  }
  
  componentDidMount() {
    console.log(this.props)
    const { beforeImages, afterImages } = this.props.process
    const galleryItems = beforeImages.concat(afterImages)
  
    const photoSet = galleryItems.map((image, i) => {
      let _image = {}
      _image.src = image.fields.file.url
  
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
  
  render() {
    const {photos} = this.state 
    return (
      <Fragment>
      <div className='four_rows_grid_container'>
        <div className='blueprint edit-area'>
          <div className='img__wrapper blueprint__wrapper'>
            <img src={this.props.process.blueprints[0].fields.file.url + '?w=1000&h=1000'} />
          </div>
        </div>
        <div className='before'>
          <h4 style={{ fontSize: '18px', textAlign: 'center', margin: '10px 0' }}>BEFORE </h4>
          {this.props.process.beforeImages.map((image, i) => (
            <div className='img__wrapper' key={i} onClick={this.openLightbox.bind(this, i)}>
              <img src={image.fields.file.url + '?w=300&h=400&fit=thumb'} />
            </div>
          ))}
        </div>
        <div className='after'>
          <h4 style={{ fontSize: '18px', textAlign: 'center', margin: '10px 0' }}>AFTER </h4>
          {this.props.process.afterImages.map((image, i) => (
            <div className='img__wrapper' key={i} onClick={this.openLightbox.bind(this, i)}>
              <img src={image.fields.file.url + '?w=300&h=400&fit=thumb'} />
            </div>
          ))}
        </div>
      </div>
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
      </Fragment>
    )
  }
}
