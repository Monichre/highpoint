import React from 'react'
import {Link} from 'react-router-dom'

export const MenuLinkBasic = ({link}) => (
  <li className='menu_link'>
    <Link to={`/${link.toLowerCase()}`}>
      <span className='u-shadow'>{link}</span>
    </Link>
  </li>
)
