import React from "react";
import Modal from "../modal";
import ReactPlayer from "react-player";
import { Close } from "../icons";

export const VideoThumb = ({
  item: { address, url, property },
  toggleVideo
}) => (
  <div className={`grid__item__thumb video_thumb`} onClick={toggleVideo}>
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

export const FullScreenVideo = ({ item: { url }, closeVideo }) => (
  <Modal className="fullscreen_video__modal">
    <span className="fullscreen_video__close" onClick={closeVideo}>
      <Close color="white" />
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
