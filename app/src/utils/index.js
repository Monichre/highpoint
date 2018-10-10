import React from "react";
import ReactPlayer from "react-player";
import _ from "lodash";

export const litteTrim = str => {
  let trimmed = str;
  if (str.length >= 605) {
    trimmed = str.split("");
    trimmed.length = 400;
    trimmed.push("...");
    trimmed.join("");
    return trimmed;
  }
  return trimmed;
};

export const bigTrim = str => {
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
  return titles.indexOf(property.title) >= 0;
};

export const modifiedPropertyTitles = properties => {
  const mod = [];

  _.sortBy(properties, item => item.order).forEach((property, i) => {
    if (property.title === "The Randolph / The Mortimer / The Valentine") {
      const split = property.title.split("/");
      const randolph = split[0];
      const mortimer = split[1];
      const valentine = split[2];
      mod.push(
        {
          index: i + 1,
          title: randolph,
          order: property.order
        },
        {
          index: i + 1,
          title: mortimer,
          order: property.order
        },
        {
          index: i + 1,
          title: valentine,
          order: property.order
        }
      );
    } else {
      mod.push({
        index: i + 1,
        title: property.title,
        order: property.order
      });
    }
  });
  return mod;
};

export const mcCallisterStyle = property =>
  property.title === "McCallister Management"
    ? {
        backgroundImage: `url(/logos/mccallister.svg)`
      }
    : null;
