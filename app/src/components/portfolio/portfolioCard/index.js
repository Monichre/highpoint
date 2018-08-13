import React from 'react'
import { Link } from 'react-router-dom'
import CinderBlock from '../../cinderblock'
import ReactPlayer from 'react-player'
import './_portfolioCard.scss'

const isAVenture = (property) => {
  const titles = ['Highpoint Ventures', 'McCallister Management', 'Latch', 'Compass', 'Reonomy']
  return titles.includes(property.title) ? true : false 
}

export const PortfolioCard = props => {
  return props.property ? (
    <div className="portfolio_card portfolio_card--full featured">
      <div className="inner">
        <h3>{props.property.title}</h3>
        <div className="img_cont">
          <div className="img_inner">
            <img src={props.property.featuredImage.fields.file.url} alt="" className={isAVenture(props.property) ? 'is_venture' : ''}/>
          </div>
        </div>
        <div className="content">
          <div className="sub_title">
            <h4>{props.property.address}</h4>
          </div>
          <div className="text">
            <p>{props.property.description}</p>
          </div>
        </div>
      </div>
      <div className="portfolio_card__details">
        <footer className={`portfolio_card__footer ${props.property.isAProcessItem ? 'process_true' : ''}`} />
        {props.property.isAProcessItem ? <ViewProcessButton {...props} /> : null}
        <CinderBlock />
      </div>
    </div>
  ) : (
    <div className="portfolio_card portfolio_card--full featured about_us__card">
      <div className="inner">
        <h3>{props.aboutUs.title}</h3>
        <div className="img_cont">
          <div className="img_inner">
            <ReactPlayer
              playing
              playsinline
              loop={true}
              volume={0}
              muted
              playbackRate={0.5}
              url={props.aboutUs.video.fields.file.url}
              className="aboutUsVideo"
              height="100%"
              width="100%"
            />
          </div>
          <div className="content__overlay">
            <div className="sub_title">
              <h4>
                {props.properties.map(property => (
                  <span>{property.title} / </span>
                ))}
              </h4>
            </div>
          </div>
        </div>

        <div className="content">
        <div className="sub_title">
            <h4>{props.aboutUs.content.split(' ').splice(0, 3).join(' ')}</h4>
          </div>
          <div className="text">
            <p>{props.aboutUs.content.split(' ').splice(3, props.aboutUs.content.length).join(' ')}</p>
          </div>
        </div>
      </div>
      <div className="portfolio_card__details">
        <footer className={`portfolio_card__footer`} />
        <CinderBlock />
      </div>
    </div>
  )
}

const ViewProcessButton = props => (
  <div className="view_process_button">
    <Link className="button__link" to={`/process/${props.property.title}`}>
      View Process
    </Link>
  </div>
)
