import React from 'react'
import MenuLink from '../menuLink'
import CinderBlock from '../cinderblock'
import {links} from '../../links'

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
          {
            links.map(link => <MenuLink link={link} />)
          }
        </ul>
        <ul className='bottom'>
          <MenuLink link='Contact' addHoverClass={addHoverClass} removeHoverClass={removeHoverClass} />
        </ul>
      </div>
    </section>
  )
}

export default LeftNav
