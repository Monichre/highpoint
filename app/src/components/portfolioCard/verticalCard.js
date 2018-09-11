import React from 'react'
import { Link } from 'react-router-dom'
import CinderBlock from '../cinderblock'
import {trim} from '../../utils'
import './_portfolioCard.scss'

const isAVenture = property => {
  const titles = ['Highpoint Ventures', 'McCallister Management', 'Latch', 'Compass', 'Reonomy']
  return !!titles.includes(property.title)
}

const handleScroll = (e) => {
  e.stopPropagation()
  e.preventDefault()
}

export const VerticalPortfolioCard = props => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%'
    }}>
    <div className='portfolio_card portfolio_card--full vertical'>
      <div className='inner vertical__inner'>
        <h3>{props.property.title}</h3>
        <div className='inner_columns'>
          <div className='img_cont'>
            <div className={`img_inner ${props.property.logos && props.property.logos.length > 0 ? 'img_logos' : ''}`}>
              <img
                src={props.property.featuredImage.fields.file.url + '?w=500&h=1500'}
                className={`vertical_img ${isAVenture(props.property) ? 'is_venture' : ''}`}
              />
              <div className='logos'>
                {props.property.logos && props.property.logos.length > 0
                  ? props.property.logos.map(logo => <img src={logo.fields.file.url} className={`venture_logo__thumb`} />)
                  : null}
              </div>
            </div>
          </div>
          <div className='content' onScroll={e => handleScroll(e)}>
            <div className='sub_title'>
              <h4>{props.property.address}</h4>
            </div>
            <div className='text'>
              <p>{trim(props.property.description)}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='portfolio_card__details'>
        <footer className={`portfolio_card__footer ${props.property.isAProcessItem ? 'process_true' : ''}`} />
        {props.property.isAProcessItem ? <ViewProcessButton {...props} /> : null}
        <CinderBlock />
      </div>
    </div>
  </div>
)

const ViewProcessButton = props => (
  <div className='view_process_button'>
    <Link className='button__link' to={`/process/${props.property.title}`}>
      View Process
    </Link>
  </div>
)
