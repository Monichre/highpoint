import React from 'react'
import './_portfolioCard.scss'

export const PortfolioCard = (props) => {
  console.log(props)
  return (
  <div className="item item--full featured">
  <div className="cont">
    <div className="img_cont">
      <img src={props.property.featuredImage.fields.file.url} alt="" />
    </div>
    <div className="text">
      <h2>{props.property.title}</h2>
      <p>
        {props.property.description}
      </p>
    </div>
  </div>
  <div className="item__details" />
</div>
)}