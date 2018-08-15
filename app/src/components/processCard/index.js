import React from 'react'
import CinderBlock from '../cinderblock'
import './_processCard.scss'

export const ProcessCard = props => (
  <section className='process_card'>
    <div className='inner'>
      <header>
      <h3>
        {props.process.title}
      </h3>
      <hr />
      </header>
      <div className='process_card__grid'>
        <div className='blueprint col-1'>
          <div className='img__wrapper blueprint__wrapper'>
            <img src={props.process.blueprints[0].fields.file.url + '?w=1000&h=1000'} />
          </div>
        </div>
        <div className='before_images col-2'>
          <h4 style={{fontSize: '14px', textAlign: 'center', margin: '10px 0'}}>BEFORE </h4>
          {props.process.beforeImages.map(image => (
            <div className='img__wrapper'>
              <img src={image.fields.file.url + '?w=300&h=400&fit=thumb'} />
            </div>
          ))}
        </div>
        <div className='after_images col-3'>
          <h4 style={{fontSize: '14px', textAlign: 'center', margin: '10px 0'}}>AFTER </h4>
          {props.process.afterImages.map(image => (
            <div className='img__wrapper'>
              <img src={image.fields.file.url + '?w=300&h=400&fit=thumb'} />
            </div>
          ))}
        </div>
      </div>
    </div>
    <footer className='process_card__footer'>
      <CinderBlock />
    </footer>
  </section>
)
