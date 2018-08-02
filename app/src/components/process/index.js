import React, { Component } from 'react'
import { processPortfolioLines, cornerLines } from '../lines'
import { ProcessPieceDefault } from '../processPiece'
import AppStore from '../../flux/stores'
import './_process.scss'

export default class Process extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeID: 0,
      activeProcess: this.props.processes[0],
      panelStyle: {
        background: this.props.processes[0].colour
      },
      buttonHover: false,
      buttonStyle: {
        color: '#ffffff'
      }
    }
  }

  componentWillMount() {
    const {processes} = AppStore.data 
    console.log(this.props)
    // const {title} = this.props.match.params 
    // const process = processes.find((process) => process.title === title) 
    // this.setState({
    //   process: process
    // })
  }

  componentDidMount() {
    processPortfolioLines()
    cornerLines()
    
    // const interactiveMap = document.getElementById('interactive-1')
    // const body = document.querySelector('body')
    // let PointsMap
    
    // body.classList.add('js')
    // if (typeof window !== undefined) {
    //   PointsMap = require('../pointsMap')
    // } 
    // const map = new PointsMap(interactiveMap, {
    //   maxOpacityOnActive: 1,
    //   activeOn: 90
    // })

    
  }

 
  render() {
    const { process } = this.state
    
    return (
      <main className="component process_component">
        <section className="wrapper">
          <div className="wrapper_inner">
            <ProcessPieceDefault process={process} />
          </div>

          />
        </section>
      </main>
    )
  }
}

