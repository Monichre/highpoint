import React from 'react'
import { Link } from 'react-router-dom'
import './_index.scss'

const LeftNavLink = ({link, addHoverClass, removeHoverClass}) => link === 'Contact'
  ? <li className='menu_link contact__link'>
    <div className='contact_text' onMouseEnter={e => addHoverClass(e)} onMouseLeave={e => removeHoverClass(e)}>
      <span className='u-shadow'>{link}</span>
    </div>
    <div className='contact-burgerIcon'>
      <span />
      <span />
    </div>
  </li>
  : <li className='menu_link'>
    <Link to={`/${link.toLowerCase()}`}>
      <span className='u-shadow'>{link}</span>
    </Link>
  </li>

const SideBarLink = ({link, onClick, index, active}) => (
  <li key={index} onClick={e => onClick(index, e)} className={`sidebar_link menu_link ${active ? 'active' : ''}`}>
    {link}
  </li>
)

const MenuLink = ({sidebar, ...props}) => sidebar ? <SideBarLink {...props} /> : <LeftNavLink {...props} />

export default MenuLink
