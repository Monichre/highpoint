import React from 'react'
import {Phone, Mail, Info} from '../icons'
import './_dotMenu.scss'

export default (props) => (

  <section id={`${props.positionRight ?  'dotMenuRight' : 'dotMenu'}`} className={`font-sans flex justify-between mt-6 mx-auto max-w-xl ${props.positionRight ?  'position_right' : ''} ${(props.pathname && props.pathname.length < 2) ? 'short_menu' : ''}`}>
    <a onMouseEnter={e => handleHover(e)} onMouseLeave={e => handleHoverLeave(e)}  href="/portfolio" className="w-1/4 flex flex-col items-center text-center text-xs text-black no-underline">
      <div className="bg-white border-black text-white rounded-full h-4 w-4 flex items-center justify-center mb-2 z-10" />
      <div className="absolute h-1 mt-4 bg-white border-black pin-y -translate-50-50" />
      <label className="font-bold uppercase tracking-wide portfolio">{props.positionRight ? <Mail /> : 'Portfolio'} </label>
    </a>
    <a onMouseEnter={e => handleHover(e)} onMouseLeave={e => handleHoverLeave(e)}  href="/gallery" className="w-1/4 relative flex flex-col items-center text-center text-xs text-black no-underline">
      <div className="bg-white border-black text-white rounded-full h-4 w-4 flex items-center justify-center mb-2 z-10" />
      <div className="absolute h-1 mt-4 bg-white border-black pin-y -translate-50-50" />
      <label className="font-bold uppercase tracking-wide gallery">{props.positionRight ? <Phone /> : 'Gallery'}</label>
    </a>
    <a onMouseEnter={e => handleHover(e)} onMouseLeave={e => handleHoverLeave(e)}  href="/process" className="w-1/4 relative flex flex-col items-center text-center text-xs text-black no-underline">
      <div className="bg-white border-black text-white rounded-full h-4 w-4 flex items-center justify-center mb-2 z-10" />
      
      <label className="font-bold uppercase tracking-wide process">{props.positionRight ? <Info /> : 'Process'}  </label>
    </a>
  </section>

)

const handleHover = (e) => {
  e.target.classList.add('hovering')
}
const handleHoverLeave = (e) => {
  e.target.classList.remove('hovering')
}

