import React from 'react'
import { trim } from '../../utils'
import CinderBlock from '../cinderblock'
import ToolTip from 'rc-tooltip'
import './_processCard.scss'

const OverlaySlide = props => (
  <div className="description__overlay">
    <div className="overlay__content">
        <h3>{props.process.title}</h3>
        <p>{props.process.description}</p>
   
      </div>
  </div>
)
export const ProcessCard = props => (
  <section className="process_card">
    <div className="inner">
      <h3>{props.process.title}</h3>
      <div className="process_card__grid">
        <div className="blueprint col-1">
          <OverlaySlide process={props.process} />
          <div className="img__wrapper blueprint__wrapper">
            <img src={props.process.blueprints[0].fields.file.url} />
          </div>
        </div>
        <div className="before_images col-2">
          {props.process.beforeImages.map(image => (
            <div className="img__wrapper">
              <img src={image.fields.file.url} />
            </div>
          ))}
        </div>
        <div className="after_images col-3">
          {props.process.afterImages.map(image => (
            <div className="img__wrapper">
              <img src={image.fields.file.url} />
            </div>
          ))}
        </div>
      </div>
    </div>
    <footer className="process_card__footer">
      <CinderBlock />
    </footer>
  </section>
)
