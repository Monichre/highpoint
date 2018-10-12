import React from "react";
import CinderBlockSVG from "../cinderblock/cinderblock";
import { BROWSER } from "../../utils/browser";
import { Link } from "react-router-dom";

export const ProcessCardPreview = props => {
  const dStyle = {
    backgroundImage: `url(${props.process.propertyImage}?w=500&h=500)`
  };

  const ieStyle = {
    background: `url(${props.process.propertyImage}?w=500&h=500)`
  };
  const bgStyle = BROWSER.isExplorer ? ieStyle : dStyle;

  return (
    <Link
      to={`/process/${props.process.title}`}
      className="item process_card__preview"
    >
      <div className="content" style={bgStyle}>
        <footer className="process_card__preview__footer">
          <div className="footer__inner">
            <h2>{props.process.title}</h2>
            <div className="footer_corner_icon">
              <CinderBlockSVG color="#fff" />
            </div>
          </div>
        </footer>
      </div>
      <div className="previews">
        {props.process.blueprints
          .concat(props.process.beforeImages)
          .map((photo, i) => (
            <div className="preview-image" key={i}>
              <img src={`${photo.fields.file.url}?w=200&h=200`} />
            </div>
          ))}
      </div>
    </Link>
  );
};
