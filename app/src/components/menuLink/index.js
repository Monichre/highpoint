import React from 'react'
import {MenuLinkBasic} from './menuLinkBasic'

const SideBarLink = ({link, onClick, index, active}) => (
  <li key={index} onClick={e => onClick(index, e)} className={`sidebar_link menu_link ${active ? 'active' : ''}`}>
    {link}
  </li>
)

const MenuLink = ({sidebar, ...props}) => sidebar ? <SideBarLink {...props} /> : <MenuLinkBasic {...props} />

export default MenuLink
