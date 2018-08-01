import React from 'react'
import { Link } from 'react-router-dom'
import { Search } from '../search'
import './_menu.scss'

export default () => (
  <section className="menu">
    <div className="inner">
      <ul style={{ listStyle: 'none' }} className="top">
        <li className="search_link" style={{ width: '100%' }}>
        <Search />
        </li>
      </ul>

      <ul className="bottom">
        <li className="menu_link">
          <Link to="/gallery">
            <span className="u-shadow">Gallery</span>
          </Link>
        </li>
        <li className="menu_link">
          <Link to="/portfolio">
            <span className="u-shadow">Portfolio</span>
          </Link>
        </li>
        <li className="menu_link">
          <Link to="/process">
            <span className="u-shadow">Process</span>
          </Link>
        </li>
      </ul>
    </div>
  </section>
)
