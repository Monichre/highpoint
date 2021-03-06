import React, { Component } from "react";
import { processPortfolioLines } from "../../components/lines";
import Lightbox from "react-images";
import MediaThumb from "../../components/thumb";
import ScrollReveal from "scrollreveal";
import AppStore from "../../flux/stores";
import LightBoxTheme from "../../components/lightboxTheme";
import Swipeable from "react-swipeable";
import { BROWSER } from "../../utils/browser";
import { mobileTouchSwipe } from "../../utils";
import _ from "lodash";
import "./_gallery.scss";

const { status } = BROWSER.isMobile();

export default class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      currentImage: 0,
      lightboxIsOpen: false,
      photos: []
    };
  }

  componentDidMount() {
    if (!status) {
      processPortfolioLines();
    }

    const { galleryItems } = AppStore.data;
    const gridContainer = document.querySelector(".thumb__scroller");
    const scroller = ScrollReveal();

    scroller.reveal(".grid__item__thumb", {
      origin: "left",
      container: gridContainer,
      distance: "40px",
      duration: 1000,
      delay: 100
    });

    const photoSet = galleryItems.map((item, i) => {
      let gridItem = {
        ...item
      };
      gridItem.src = item.url;
      gridItem.thumb = item.thumb;
      gridItem.caption = `${item.property}${
        item.address ? ", " + item.address : ""
      }`;
      return gridItem;
    });

    this.setState({
      photos: photoSet
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
    const _this = this;
    this.setState({
      currentImage: i,
      lightboxIsOpen: true
    });
    mobileTouchSwipe(this.goToNext, this.goToPrevious);
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
    setTimeout(() => {
      const popupImg = document.querySelector(
        ".image_1swebtw-o_O-imageLoaded_zgbg08"
      );
      if (popupImg) {
        console.log(popupImg);
        popupImg.addEventListener("touchmove", e => {
          console.log(e);
          console.log(e.clientX);
        });
        popupImg.addEventListener("mousemove", e => {
          console.log(e);
          console.log(e.clientX);
        });
      } else {
        console.log("no popupImg");
      }
    }, 1000);
  };
  handleClickImage = () => {
    if (this.state.currentImage === this.state.photos.length - 1) return;
    this.goToNext();
  };

  render() {
    const { galleryItems } = AppStore.data;
    const { photos } = this.state;
    return (
      <main className="gallery loading component gallery_component">
        <h1 className="page_title"> Gallery </h1>{" "}
        <section className="wrapper">
          <div className="thumb__scroller">
            {" "}
            {galleryItems.map((item, i) => (
              <MediaThumb
                item={item}
                key={i}
                openLightbox={this.openLightbox.bind(this, i)}
              />
            ))}{" "}
          </div>{" "}
        </section>{" "}
        <Swipeable
          onSwipedRight={this.goToNext}
          flickThreshold={0.3}
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
            theme={LightBoxTheme}
          />{" "}
        </Swipeable>{" "}
      </main>
    );
  }
}
