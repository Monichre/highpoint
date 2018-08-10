import React from 'react'
import {Prev} from '../icons'
import CinderBlock from '../cinderblock'
import {Link} from 'react-router-dom'
import './_processCard.scss'

const OverlaySlide = props => (
  <div className="description__overlay">
    <div className="overlay__content">
        <img src={props.process.propertyImage + '?w=500&h=500'} />
        <h3>{props.process.title}</h3>
        <p>{props.process.description}</p>
   
      </div>
  </div>
)
export const ProcessCard = props => (
  <section className="process_card">
    <div className="inner">
      <h3><Link to='/process' className='hover-icon-back' style={{fontSize: '10px', position: 'absolute', left: 0}}><Prev /></Link>{props.process.title}</h3>
      <div className="process_card__grid">
        <div className="blueprint col-1">
          <OverlaySlide process={props.process} />
          <div className="img__wrapper blueprint__wrapper">
            <img src={props.process.blueprints[0].fields.file.url + '?w=1000&h=1000'} />
          </div>
        </div>
        <div className="before_images col-2">
          {props.process.beforeImages.map(image => (
            <div className="img__wrapper">
              <img src={image.fields.file.url + '?w=300&h=400&fit=thumb'} />
            </div>
          ))}
        </div>
        <div className="after_images col-3">
          {props.process.afterImages.map(image => (
            <div className="img__wrapper">
              <img src={image.fields.file.url + '?w=300&h=400&fit=thumb'} />
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
