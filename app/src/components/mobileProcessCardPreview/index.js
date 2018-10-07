import React from "react";
import CinderBlockSVG from "../cinderblock/cinderblock";

const MobileProcessCardPreview = props => {
  return (
    <li className="stack__item item process_card__preview">
      <div
        className="content"
        style={{
          backgroundImage: `url(${props.process.propertyImage}?w=500&h=500`
        }}
      >
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
          .map(photo => (
            <div className="preview-image">
              <img src={`${photo.fields.file.url}?w=200&h=200`} />
            </div>
          ))}
      </div>
    </li>
  );
};

export default MobileProcessCardPreview;
