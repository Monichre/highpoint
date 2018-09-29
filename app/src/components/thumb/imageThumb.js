import React from "react";

const ImageThumb = ({
  openLightbox,
  item: { address, url, isAVenture, media, property }
}) => (
  <div
    className={`grid__item__thumb img_thumb ${
      isAVenture ? "venture_thumb" : ""
    }`}
    onClick={openLightbox}
  >
    <img src={url} alt={property.title + "gallery thumb image"} />
    <div className="overlay__inner_container">
      <div className="inner">
        <h3>{property}</h3>
        <p>{address}</p>
      </div>
    </div>
  </div>
);

export default ImageThumb;
