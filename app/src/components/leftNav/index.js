import React from 'react'
import MenuLink from '../menuLink'
import CinderBlock from '../cinderblock'
import HoverLink from '../hoverLink'
import {links} from '../../links'

const LeftNav = () => {
  return (
    <section className='left_nav'>
      <div className='inner'>
        <ul style={{ listStyle: 'none' }} className='top'>
          <li className='logo_link' style={{ width: '100%' }}>
            <CinderBlock context='navigation' linkTo='/' id='cinderblock_navigation' />
          </li>
        </ul>
        <ul className='middle'>
          {
            links.map(link => <MenuLink link={link} />)
          }
        </ul>
        <ul className='bottom'>
          <HoverLink link='Contact' className='contact' />
        </ul>
      </div>
    </section>
  )
}

export default LeftNav
