import React from 'react'
import ProcessCardGrid from './processCardGrid'
import CinderBlock from '../cinderblock'
import './_processCard.scss'

const ProcessCard = props => (
  <section className='process_card'>
    <div className='inner'>
      <header>
        <h3>{props.process.title}</h3>
        <hr />
      </header>
      <ProcessCardGrid {...props} />
    </div>
    <footer className='process_card__footer'>
      <CinderBlock />
    </footer>
  </section>
)

export default ProcessCard
