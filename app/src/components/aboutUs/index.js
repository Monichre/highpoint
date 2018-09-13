import React from 'react'

const AboutUs = ({allVentures, goToPage, content}) => (
  <div style={{ height: '100vh', overflow: 'hidden' }}>
    <h1 className='page_title'>
      Portfolio
    </h1>
    <div className='about_us'>
      <h4>
        {allVentures.map((property, i) => (
          <span style={{ cursor: 'pointer' }} onClick={e => goToPage(e, i)}>
            {property.title} {i === 0 || i === allVentures.length - 1 ? '' : '/'}{' '}
          </span>
        ))}
      </h4>
      <div className='text'>
        <p>{content}</p>
      </div>
    </div>
  </div>
)

export default AboutUs
