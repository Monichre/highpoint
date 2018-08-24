import React from 'react'
import { Link } from 'react-router-dom'
import CinderBlock from '../cinderblock'
import './_menu.scss'

export default props => (
  <section className='menu'>
    <div className='inner'>
      <ul style={{ listStyle: 'none' }} className='top'>
        <li className='logo_link' style={{ width: '100%' }}>
          <CinderBlock />
        </li>
      </ul>
      <ul className='bottom'>
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
        <li className='menu_link contact__link'>
          <div style={{ transform: 'rotate(-90deg)', position: 'absolute', bottom: '50px', left: '0px' }}>
            <a>
              <span className='u-shadow'>Contact</span>
            </a>
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
