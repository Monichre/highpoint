import React from 'react'
import './_rn.scss'

export default (props) => {
  
  const conditionalBreak = props.location.pathname === '/' ? null : <br />
  return (
  <section className={`right_nav ${props.location.pathname === '/' ? '' : 'non_homepage_route'}`} >
    <div className="inner" style={{ position: 'relative' }}>
      <ul style={{listStyle: 'none'}}>
        <li> 
          <span className="u-shadow">Developer <span className='slash'>/</span></span>{conditionalBreak}
          <span className="u-shadow"> Owner<span className='slash'>/</span> </span>{conditionalBreak}
          <span className="u-shadow">Operator</span>
        </li>
        <li> <span className="">info@highpointpg.com</span></li>
      </ul>
    </div>
  </section>
)
}