import React from 'react'
import PortfolioCardFooter from '../portfolioCardFooter'
import {CardArrowDown} from '../icons'
import {isAVenture} from '../../utils'

export const HorizontalPortfolioCard = ({property, arrowClick, index}) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%'
    }}>
    <div className='portfolio_card portfolio_card--full'>
      <div className='inner horizontal__inner'>
        <h3>{property.title}</h3>
        <div className='img_cont'>
          <div className={`img_inner ${property.logos && property.logos.length > 0 ? 'img_logos' : ''}`}>
            <img
              src={property.featuredImage.fields.file.url + '?w=2000&h=1000'}
              className={isAVenture(property) ? 'is_venture' : ''}
            />
            <div className='logos'>
              {property.logos && property.logos.length > 0
                ? property.logos.map(logo => <img src={logo.fields.file.url} className={`venture_logo__thumb`} />)
                : null}
            </div>
          </div>
        </div>
        <div className='content'>
          <div className='sub_title'>
            <h4>{property.address}</h4>
          </div>
          <div className='text'>
            <p>{property.description}</p>
          </div>
        </div>
      </div>
      <PortfolioCardFooter property={property} />
      <CardArrowDown index={index} onClick={arrowClick} />
    </div>
  </div>
)
