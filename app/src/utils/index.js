import React from "react";
import ReactPlayer from "react-player";

export const trim = str => {
  let trimmed = str;
  if (str.length >= 1280) {
    trimmed = str.split("");
    trimmed.length = 1275;
    trimmed.push("...");
    trimmed.join("");
    return trimmed;
  }
  return trimmed;
};

export const imageOrVideo = ({ video, img }) =>
  video === null ? (
    <img src={img.file.url} />
  ) : (
    <ReactPlayer
      playing
      playsinline
      volume={0}
      muted
      url={video}
      className="about_us_video"
      height="100%"
      width="100%"
    />
  );

export const isVideo = url => url.includes("mp4");

export const sleep = time => new Promise(resolve => setTimeout(resolve, time));

export const isAVenture = property => {
  const titles = [
    "Highpoint Ventures",
    "McCallister Management",
    "Latch",
    "Compass",
    "Reonomy"
  ];
  return !!titles.includes(property.title);
};
