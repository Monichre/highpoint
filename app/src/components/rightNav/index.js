import React from 'react'
import CinderBlock from '../cinderblock'
import './_rn.scss'

export default (props) => {
  
  
  return (
  <section className={`right_nav`} >
    <div className="inner" style={{ position: 'relative' }}>
    <ul style={{listStyle: 'none'}} className='top'>
        <li> <CinderBlock /> </li>
    </ul>
      <ul style={{listStyle: 'none'}} className='bottom'>
        <li> 
          <span className="u-shadow">Developer</span> <br />
          <span className="u-shadow"> Owner </span> <br />
          <span className="u-shadow">Operator</span>
        </li>
      </ul>
    </div>
  </section>
)
}