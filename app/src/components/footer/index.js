import React from 'react'
import CinderBlock from '../cinderblock'
import './_footer.scss'

export default props => {
  const clickHandler = e => {
    const skews = Array.from(document.querySelectorAll('.skew'))
    const nav = document.querySelector('.footer_nav')
    nav.classList.contains('showing') ? nav.classList.remove('showing') : nav.classList.add('showing')
  }
  const handleHover = el => {
    const element = document.querySelector(`.${el}`)
    element.classList.add('hovering')
  }
  const handleHoverLeave = el => {
    const element = document.querySelector(`.${el}`)
    element.classList.remove('hovering')
  }
  return (
    <div className="footer">
      <nav className="footer_nav">
        <div className="container">
          <div
            className="skew"
            onMouseLeave={e => handleHoverLeave('skew_gallery')}
            onMouseEnter={e => handleHover('skew_gallery')}
          />
          <div
            className="skew"
            onMouseLeave={e => handleHoverLeave('skew_portfolio')}
            onMouseEnter={e => handleHover('skew_portfolio')}
          />
          <div
            className="skew"
            onMouseLeave={e => handleHoverLeave('skew_process')}
            onMouseEnter={e => handleHover('skew_process')}
          />
          <p className="skew_gallery">Gallery</p>
          <p className="skew_portfolio">Portfolio</p>
          <p className="skew_process">Process</p>
        </div>
      </nav>
      <div className="burger" onClick={e => clickHandler(e)}>
        <CinderBlock />
      </div>
    </div>
  )
}
