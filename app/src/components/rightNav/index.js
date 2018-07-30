import React from 'react'
import './_rn.scss'

export default () => (
  <section className="right_nav" >
    <div className="inner" style={{ position: 'relative' }}>
      <ul style={{listStyle: 'none'}}>
        <li> 
          <span className="u-shadow">Developer <span className='slash'>/</span></span>
          <span className="u-shadow"> Owner<span className='slash'>/</span> </span>
          <span className="u-shadow">Operator</span></li>
        <li style={{fontSize: '10px'}}> <span className="">info@highpointpg.com</span></li>
      </ul>
    </div>
  </section>
)
