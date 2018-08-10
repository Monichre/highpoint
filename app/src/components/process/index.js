import React, { Component } from 'react'
import { processPortfolioLines, cornerLines } from '../lines'
import { ProcessCard } from '../processCard'
import AppStore from '../../flux/stores'
import './_process.scss'

export default class Process extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    const { processes, properties } = AppStore.data
    const title = decodeURIComponent(window.location.pathname.split('/').pop())
    console.log(properties)
    console.log(title)
    const property = properties.find(property => property.title === title) 
    console.log(property)
    const process = property ? {...property.process.fields} : processes.find(process => process.title === title) 
    console.log(process)
    this.setState({
      process: process
    })
  }

  componentDidMount() {
    processPortfolioLines()
    cornerLines()
  }

  render() {
    const { process } = this.state
    return (
      <main className="component process_component">
        <h1 style={{ textAlign: 'center', textTransform: 'uppercase', fontSize: '45px', letterSpacing: '4px' }}>
          Process
        </h1>
        <section className="inner" style={{paddingBottom: '100px'}}>
          <ProcessCard process={process} />
        </section>
      </main>
    )
  }
}
