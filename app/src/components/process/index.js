import React, { Component } from 'react'
import { processPortfolioLines, cornerLines } from '../lines'
import ProcessCard from '../processCard'
import AppStore from '../../flux/stores'

export default class Process extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentWillMount () {
    const { processes, properties } = AppStore.data
    const title = decodeURIComponent(window.location.pathname.split('/').pop())
    const property = properties.find(property => property.title === title)
    const process = property ? { ...property.process.fields } : processes.find(process => process.title === title)

    this.setState({
      process: process
    })
  }

  componentDidMount () {
    processPortfolioLines()
    cornerLines()
  }

  render () {
    const { process } = this.state
    return (
      <main className='component process_component'>
        <h1
          style={{
            textAlign: 'center',
            textTransform: 'uppercase',
            fontSize: '55px',
            letterSpacing: '4px',
            marginTop: '40px'
          }}>
          Process
        </h1>
        <section className='inner' style={{ paddingBottom: '100px' }}>
          <ProcessCard process={process} />
        </section>
      </main>
    )
  }
}
