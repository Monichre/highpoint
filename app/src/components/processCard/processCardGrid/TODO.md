import React, { Component, Fragment } from 'react'
import Lightbox from 'react-images'
import LightBoxTheme from '../../../lightboxTheme'
import { BROWSER } from '../../../../utils/browser'
import { MobileBluePrint, MobileBefore, MobileAfter } from './mobileFiveRows'
import './\_five-rows.scss'

const { status } = BROWSER.isMobile()

export default class FiveRowGrid extends Component {
constructor() {
super()
this.state = {
currentImage: 0,
lightboxIsOpen: false,
photos: [],
galleryItems: []
}
}

componentDidMount() {
const { beforeImages, afterImages } = this.props.process
const galleryItems = []

    beforeImages.forEach((img, i) => {
      galleryItems.push(img)
      galleryItems.push(afterImages[i])
    })

    const photoSet = galleryItems.map((image, i) => {
      let _image = {}
      _image.src = image.fields.file.url

      return _image
    })

    this.setState({
      photos: photoSet,
      galleryItems: galleryItems
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
const { photos, galleryItems } = this.state
return (
<Fragment>
<div className="five_row_grid_container">
{status ? (
<MobileBluePrint process={this.props.process} />
) : (
<div className="blueprint edit-area">
<img
src={
this.props.process.blueprints[0].fields.file.url +
'?w=1000&h=1000'
}
/>
</div>
)}
{status ? (
<MobileBefore
              galleryItems={galleryItems}
              process={this.props.process}
            />
) : (
<div className="before">
<h4
style={{
                  fontSize: '18px',
                  textAlign: 'center',
                  margin: '10px 0'
                }}>
BEFORE{' '}
</h4>
{galleryItems
.filter(img => galleryItems.indexOf(img) % 2 === 0)
.map((image, i) => (
<div
className="img\_\_wrapper"
key={i}
onClick={this.openLightbox.bind(
this,
galleryItems.indexOf(image)
)}>
<img
src={image.fields.file.url + '?w=300&h=400&fit=thumb'}
/>
</div>
))}
</div>
)}

          {status ? (
            <MobileAfter
              galleryItems={galleryItems}
              process={this.props.process}
            />
          ) : (
            <div className="after">
              <h4
                style={{
                  fontSize: '18px',
                  textAlign: 'center',
                  margin: '10px 0'
                }}>
                AFTER{' '}
              </h4>
              {galleryItems
                .filter(img => galleryItems.indexOf(img) % 2 !== 0)
                .map((image, i) => (
                  <div
                    className="img__wrapper"
                    key={i}
                    onClick={this.openLightbox.bind(
                      this,
                      galleryItems.indexOf(image)
                    )}>
                    <img
                      src={image.fields.file.url + '?w=300&h=400&fit=thumb'}
                    />
                  </div>
                ))}
            </div>
          )}
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