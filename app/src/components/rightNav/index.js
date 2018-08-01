import React from 'react'
import './_rn.scss'

export default (props) => {
  
  
  return (
  <section className={`right_nav`} >
    <div className="inner" style={{ position: 'relative' }}>
    <ul style={{listStyle: 'none'}} className='top'>
        <li>
        <div id="contact-btn-container">
            <span className="line line01" />
            <span className="line line02" />
            <span className="line line03" />
            <span className="text u-shadow">Contact</span>
          </div>
        </li>
    </ul>
      <ul style={{listStyle: 'none'}} className='bottom'>
        <li> 
          <span className="">Developer</span> 
        </li>
        <li>
        <span className="">Owner</span> 
        </li>
        <li>
        <span className="">Operator</span>
        </li>
      </ul>
    </div>
  </section>
)
}