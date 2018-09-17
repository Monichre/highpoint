import React, { Fragment } from "react";
import { Flex, Box, Image } from "rebass";

export const MobileBluePrint = props => (
  <Box width={[1]}>
    <Image
      src={props.process.blueprints[0].fields.file.url + "?w=1000&h=1000"}
    />
  </Box>
);

export const MobileBefore = ({ galleryItems }) => (
  <Fragment>
    <h4 style={{ fontSize: "18px", textAlign: "center", margin: "10px 0" }}>
      BEFORE{" "}
    </h4>
    <Flex>
      {galleryItems
        .filter(img => galleryItems.indexOf(img) % 2 === 0)
        .map((image, i) => (
          <div
            className="img__wrapper"
            key={i}
            onClick={this.openLightbox.bind(this, galleryItems.indexOf(image))}
          >
            <img src={image.fields.file.url + "?w=300&h=400&fit=thumb"} />
          </div>
        ))}
    </Flex>
  </Fragment>
);

export const MobileAfter = ({ galleryItems }) => (
  <Fragment>
    <h4 style={{ fontSize: "18px", textAlign: "center", margin: "10px 0" }}>
      AFTER{" "}
    </h4>
    <Flex>
      {galleryItems
        .filter(img => galleryItems.indexOf(img) % 2 !== 0)
        .map((image, i) => (
          <div
            className="img__wrapper"
            key={i}
            onClick={this.openLightbox.bind(this, galleryItems.indexOf(image))}
          >
            <img src={image.fields.file.url + "?w=300&h=400&fit=thumb"} />
          </div>
        ))}
    </Flex>
  </Fragment>
);
