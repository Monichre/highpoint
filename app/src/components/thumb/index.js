import React, { Fragment, Component } from "react";
import { Close } from "../icons";
import Modal from "../modal";
import ReactPlayer from "react-player";
import "./_index.scss";

const FullScreenVideo = ({ item: { url }, closeVideo }) => (
  <Modal className="fullscreen_video__modal">
    <span className="fullscreen_video__close" onClick={closeVideo}>
      <Close />
    </span>
    <ReactPlayer
      volume={0}
      url={url}
      muted
      className={`fullscreen_video `}
      controls
      height={"100%"}
    />
  </Modal>
);

const VideoThumb = ({
  item: { address, url, isAVenture, media, property },
  openVideo
}) => (
  <div className={`grid__item__thumb video_thumb`} onClick={openVideo}>
    <ReactPlayer
      playing
      playsinline
      volume={0}
      url={url}
      muted
      className={`gallery_video `}
      height={"100%"}
    />
    <div className="overlay__inner_container">
      <div className="inner">
        <h3>{property}</h3>
        <p>{address}</p>
      </div>
    </div>
  </div>
);

export const ImageThumb = ({
  openLightbox,
  item: { address, url, isAVenture, media, property }
}) => (
  <div
    className={`grid__item__thumb img_thumb ${
      isAVenture ? "venture_thumb" : ""
    }`}
    data-revealer-color="#8779d2"
    onClick={openLightbox}
  >
    <img src={url} alt="Some image" />
    <div className="bg__wrap">
      <div
        className="grid__item__bg"
        style={{ backgroundImage: `url(${url})` }}
      />
    </div>
    <div className="overlay__inner_container">
      <div className="inner">
        <h3>{property}</h3>
        <p>{address}</p>
      </div>
    </div>
  </div>
);

export default class MediaThumb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openVideoModal: false
    };
  }

  toggleVideo = e => {
    e.preventDefault();
    this.setState({
      openVideoModal: !this.state.openVideoModal
    });
  };

  render() {
    const videoModal = this.state.openVideoModal ? (
      <FullScreenVideo {...this.props} closeVideo={this.toggleVideo} />
    ) : null;

    return this.props.item.media === "video" ? (
      <Fragment>
        {videoModal}
        <VideoThumb {...this.props} openVideo={this.toggleVideo} />
      </Fragment>
    ) : (
      <ImageThumb {...this.props} />
    );
  }
}
