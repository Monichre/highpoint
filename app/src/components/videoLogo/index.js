import React from "react";
import AnimatedVideoSvg from "./animatedVideoSvg";
import VideoSvgClipPath from "./videoSvgClipPath";

export const VideoLogo = props => {
  return (
    <main>
      <div className="wrapper">
        {props.children}
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
