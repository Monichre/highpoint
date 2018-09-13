import React from 'react'
import CinderBlock from '../cinderblock'
import { Link } from 'react-router-dom'
// import './_processCardPreview.scss'

export const ProcessCardPreview = props => (
  <Link to={`/process/${props.process.title}`} className='item process_card__preview'>
    <div className='content' style={{ backgroundImage: `url(${props.process.propertyImage}?w=500&h=500)` }}>
      <footer className='process_card__preview__footer'>
        <h2>{props.process.title} <CinderBlock /></h2>
      </footer>
    </div>
    <div className='previews'>
      {props.process.blueprints.concat(props.process.beforeImages).map(photo => (
        <div className='preview-image'>
          <img src={photo.fields.file.url + '?w=200&h=200'} />
        </div>
      ))}
    </div>
  </Link>
)
