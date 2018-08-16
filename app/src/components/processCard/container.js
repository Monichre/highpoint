import React from 'react'
import CinderBlock from '../cinderblock'

export default props => (
  <section className='process_card'>
    <div className='inner'>
      <header>
        <h3>{props.process.title}</h3>
        <hr />
      </header>
      {props.children}
    </div>
    <footer className='process_card__footer'>
      <CinderBlock />
    </footer>
  </section>
)
