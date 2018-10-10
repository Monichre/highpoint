import React, { Component, Fragment } from "react";
import Lightbox from "react-images";
import LightBoxTheme from "../../../lightboxTheme";
import Swipeable from "react-swipeable";
import "./_four-rows.scss";

export default class FourRowGrid extends Component {
  constructor() {
    super();
    this.state = {
      currentImage: 0,
      lightboxIsOpen: false,
      photos: [],
      galleryItems: []
    };
  }

  componentDidMount() {
    const { beforeImages, afterImages } = this.props.process;
    const galleryItems = [];

    beforeImages.forEach((img, i) => {
      galleryItems.push(img);
      galleryItems.push(afterImages[i]);
    });

    const photoSet = galleryItems.map((image, i) => {
      let _image = {};
      _image.src = image.fields.file.url + "?w=2000&h=1000";
      _image.thumb = image.fields.file.url + "?w=500&h=500&fit=thumb";
      _image.srcSet = image.fields.file.url + "?w=2000&h=1000";
      _image.alt =
        image.fields.file.details.image.height >
        image.fields.file.details.image.width
          ? "object_fit__portrait"
          : "object_fit__landscape";

      return _image;
    });
    // const photoSet = galleryItems.map((image, i) => {
    //   let _image = {}
    //   _image.src = image.fields.file.url
    //   _image.thumb = image.fields.file.url + '?w=500&h=500&fit=thumb'
    //   _image.srcSet = `${image.fields.file.url}?w=1000&h=500&fit=crop , ${image.fields.file.url}`
    //   _image.alt =
    //     image.fields.file.details.image.height >
    //       image.fields.file.details.image.width
    //       ? 'object_fit__portrait'
    //       : 'object_fit__landscape'

    //   return _image
    // })
    this.setState({
      photos: photoSet,
      galleryItems: galleryItems
    });
  }

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  };

  openLightbox = (i, e) => {
    e.preventDefault();
    this.setState({
      currentImage: i,
      lightboxIsOpen: true
    });
  };

  goToNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  };

  goToPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  };

  goToImage = index => {
    this.setState({
      currentImage: index
    });
  };
  handleClickImage = () => {
    if (this.state.currentImage === this.state.photos.length - 1) return;
    this.goToNext();
  };

  render() {
    const { photos, galleryItems } = this.state;
    return (
      <Fragment>
        <div className="four_rows_grid_container">
          <div className="blueprint edit-area">
            <div className="img__wrapper blueprint__wrapper">
              <img
                src={
                  this.props.process.blueprints[0].fields.file.url +
                  "?w=1000&h=1000"
                }
              />
            </div>
          </div>
          <div className="before">
            <h4>BEFORE</h4>
            {galleryItems
              .filter(img => galleryItems.indexOf(img) % 2 === 0)
              .map((image, i) => (
                <div
                  className="img__wrapper"
                  key={i}
                  onClick={this.openLightbox.bind(
                    this,
                    galleryItems.indexOf(image)
                  )}
                >
                  <img src={image.fields.file.url + "?w=300&h=400&fit=thumb"} />
                </div>
              ))}
          </div>
          <div className="after">
            <h4>AFTER</h4>
            {galleryItems
              .filter(img => galleryItems.indexOf(img) % 2 !== 0)
              .map((image, i) => (
                <div
                  className="img__wrapper"
                  key={i}
                  onClick={this.openLightbox.bind(
                    this,
                    galleryItems.indexOf(image)
                  )}
                >
                  <img src={image.fields.file.url + "?w=300&h=400&fit=thumb"} />
                </div>
              ))}
          </div>
        </div>
        <Swipeable
          onSwipedRight={this.goToNext}
          onSwipedLeft={this.goToPrevious}
        >
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
            // theme={LightBoxTheme()}
          />
        </Swipeable>
      </Fragment>
    );
  }
}
