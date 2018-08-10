import React from 'react' 
import CinderBlock from '../cinderblock'
import {Link} from 'react-router-dom'
import './_processCardPreview.scss'

export const ProcessCardPreview = (props) => (
  <Link  to={`/process/${props.process.title}`} className="item process_card__preview">
  <div className="content" style={{backgroundImage: `url(${props.process.propertyImage}?w=500&h=500)`}}>
    <footer className='process_card__preview__footer'>
    <h2>{props.process.title} </h2>
    <CinderBlock />
    </footer>
  </div>
  <div className="previews">
    {props.process.blueprints.map(blueprint => (
      <div className="preview-image">
        <img src={blueprint.fields.file.url} />
      </div>
    ))}
  </div>
</Link>
)