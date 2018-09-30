import React from "react";
import CinderBlock from "../cinderblock";
import { Link } from "react-router-dom";

export const ProcessCardPreview = props => (
  <Link
    to={`/process/${props.process.title}`}
    className="item process_card__preview"
  >
    <div
      className="content"
      style={{
        backgroundImage: `url(${props.process.propertyImage}`
      }}
    >
      <footer className="process_card__preview__footer">
        <div className="footer__inner">
          <h2>{props.process.title}</h2>
          <div className="footer_corner_icon">
            <CinderBlock />
          </div>
        </div>
      </footer>
    </div>
    <div className="previews">
      {props.process.blueprints
        .concat(props.process.beforeImages)
        .map(photo => (
          <div className="preview-image">
            <img src={photo.fields.file.url} />
          </div>
        ))}
    </div>
  </Link>
);

// ;('?w=200&h=200')

// ? w = 500 & h=500)
