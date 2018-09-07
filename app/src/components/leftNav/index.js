import React from 'react'
import AppDispatcher from '../../flux/dispatchers'
import { Link } from 'react-router-dom'
import CinderBlock from '../cinderblock'
// import './_ln.scss'

const LeftNav = () => {
  const addHoverClass = ({e: target}) => {
    const burgerIcon = document.querySelector('.contact-burgerIcon')
    burgerIcon.classList.add('hovering')
  }
  const removeHoverClass = ({e: target}) => {
    const burgerIcon = document.querySelector('.contact-burgerIcon')
    burgerIcon.classList.remove('hovering')
  }
  return (
    <section className='menu'>
      <div className='inner'>
        <ul style={{ listStyle: 'none' }} className='top'>
          <li className='logo_link' style={{ width: '100%' }}>
            <CinderBlock />
          </li>
        </ul>
        <ul className='middle'>
          <li className='menu_link'>
            <Link to='/portfolio'>
              <span className='u-shadow'>Portfolio</span>
            </Link>
          </li>
          <li className='menu_link'>
            <Link to='/process'>
              <span className='u-shadow'>Process</span>
            </Link>
          </li>
          <li className='menu_link'>
            <Link to='/gallery'>
              <span className='u-shadow'>Gallery</span>
            </Link>
          </li>
        </ul>
        <ul className='bottom'>
          <li className='menu_link contact__link'>
            <div className='contact_text' onMouseEnter={e => addHoverClass(e)} onMouseLeave={e => removeHoverClass(e)}>
              <span className='u-shadow'>Contact</span>
            </div>
            <div className='contact-burgerIcon'>
              <span />
              <span />
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default LeftNav
