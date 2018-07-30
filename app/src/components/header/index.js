import React from 'react'
import './_header.scss'

export const Header = props => {
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
    text.text = ''
    text.data_text = ''
    header_class = ''
  }

  const Header = () => (
  <h2>
    {text.text}
    <span data-text={text.text}>{text.data_text}</span>
    <span data-text={text.text}>{text.data_text}</span>{' '}
  </h2>
  )
  // <Header />
  return (
    <nav className={`header ${header_class} `}>
    
      <div className="title">
        
      </div>
    </nav>
  )
}
