import React from 'react'
import './_index.scss'

export const MobileMenu = ({ active }) => (
  <nav className={`mobile_nav ${active ? 'active' : ''}`}>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </nav>
)
