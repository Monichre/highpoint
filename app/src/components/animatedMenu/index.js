import React from 'react'
import {Link} from 'react-router-dom'
import { Menu } from '../icons'
import './_animated.scss'

export default () => {
  const toggle = (el, cssClass) => el.classList.contains(cssClass) ? el.classList.remove(cssClass) : el.classList.add(cssClass)
  const runMenuAnimation = (e) => {
    e.preventDefault()
    const slideOut = document.querySelector('.slide_out')
    toggle(slideOut, 'active')
  }
  return (
  <section className="animated_nav">
    <div className="inner">
      <ul>
        <li className="menu_link slide_out_trigger">
          <span onClick={runMenuAnimation}><Menu /></span>
        </li>
        <ul className='slide_out'>
            <li className="menu_link slide_out_item">
              <Link to="/gallery/">Gallery</Link>
            </li>
            <li className="menu_link slide_out_item">
              <Link to="/portfolio2/">Portfolio</Link>
            </li>
            <li className="menu_link slide_out_item">
              <Link to="/process/">Process</Link>
            </li>
          </ul>
      </ul>
    </div>
  </section>


  )
}
