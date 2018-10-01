import React from "react";
import Video from "../video";
import AnimatedVideoSvg from "./animatedVideoSvg";
import VideoSvgClipPath from "./videoSvgClipPath";

export const VideoLogo = props => {
  return (
    <main>
      <div className="wrapper">
        <Video url={props.url} muted={props.muted} />
        <div className="border">
          <div className="inner">
            <AnimatedVideoSvg />
          </div>
        </div>
        <VideoSvgClipPath />
      </div>
    </main>
  );
};

export default VideoLogo;
