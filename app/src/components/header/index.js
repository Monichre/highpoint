import React from 'react'
import HorizontalLogo from '../horizontalLogo'
import './_header.scss'

export const Header = props => {
  console.log(props)
  const text = {}
  let header_class
  if(props.location.pathname.includes('portfolio')) {
    text.text = 'Portfolio'
    text.data_text = 'Portfolio'
    header_class = 'portfolio'
  } else if(props.location.pathname.includes('process')) {
    text.text = 'Process'
    text.data_text = 'Process'
    header_class = 'process'
  } else if(props.location.pathname.includes('gallery')) {
    text.text = 'Gallery'
    text.data_text = 'Gallery'
    header_class = 'gallery'
  } else {
    text.text = 'Real Estate'
    text.data_text = 'RealEstate'
    header_class = 'realEstate'
  }

  const Header = () => (
  <h2>
    {text.text}
    <span data-text={text.text}>{text.data_text}</span>
    <span data-text={text.text}>{text.data_text}</span>{' '}
  </h2>
  )

    
  return (
    <nav className={`header ${header_class} `}>
    <HorizontalLogo />
      <div className="title">
        <Header />
      </div>
      {(props.location.pathname.includes('portfolio') || props.location.pathname.includes('process') || props.location.pathname.includes('gallery')) ? null : <p id='developer_owner_operator' style={p_style}>Developer | Owner | Operator </p>}
    </nav>
  )
}


const p_style = {
  position: 'absolute',
    left: '0',
    bottom: '-20px',
    textAlign: 'center',
    fontSize: '10px',
    letterSpacing: '2px',
    fontWeight: '700',
    color: '#333',
    fontFamily: 'N-Black',
}