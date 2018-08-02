import React from 'react'
import CinderBlock from '../cinderblock'
import './_footer.scss'

export default props => {
  const clickHandler = (e) => {
    const skews  = Array.from(document.querySelectorAll('.skew'))
    const nav = document.querySelector('.footer_nav')
    nav.classList.contains('showing') ? nav.classList.remove('showing') : nav.classList.add('showing')
  }
  return (
  <div className="footer">
    <nav className='footer_nav'>
      <div className="container">
        <div className="skew" />
        <div className="skew" />
        <div className="skew" />
        <p>
          Gallery
        </p>
        <p>
          Portfolio
        </p>
        <p>
          Process
        </p>
    
      </div>
    </nav>
    <div className="burger" onClick={e => clickHandler(e)}>
      <CinderBlock />
    </div>
  </div>
)}
