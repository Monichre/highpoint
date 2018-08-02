import React from 'react'
import { Link } from 'react-router-dom'
import CinderBlock from '../../cinderblock'
import './_portfolioCard.scss'

export const PortfolioCard = props => {
  console.log(props)
  return (
    <div className="portfolio_card portfolio_card--full featured">
      <div className="inner">
        <h3>{props.property.title}</h3>
        <div className="img_cont">
          <div className="img_inner">
            <img src={props.property.featuredImage.fields.file.url} alt="" />
          </div>
        </div>
        <div className="content">
          <div className="sub_title">
            <h4>{props.property.title}</h4>
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
  )
}

const ViewProcessButton = props => (
  <div className="view_process_button">
    <Link className="button__link" to={`/process/${props.property.title}`}>
      View Process
    </Link>
  </div>
)
