import React, { Component } from 'react'
import { processPortfolioLines, cornerLines } from '../lines'
import { ProcessPieceDefault } from '../processPiece'

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

  componentDidMount() {
    processPortfolioLines()
    cornerLines()
    
    const interactiveMap = document.getElementById('interactive-1')
    const body = document.querySelector('body')
    let PointsMap
    
    body.classList.add('js')
    if (typeof window !== undefined) {
      PointsMap = require('../pointsMap')
    } 
    const map = new PointsMap(interactiveMap, {
      maxOpacityOnActive: 1,
      activeOn: 90
    })

    
  }

  changeActive(id, e) {
    this.setState({
      activeID: id,
      wrapperStyle: {
        backgroundImage: `url('${this.props.processes[id].img}')`
      },
      img: this.props.processes[id].img,
      panelStyle: {
        backgroundColor: this.props.processes[id].colour
      }
    })
  }

  buttonColour() {
    if (!this.state.buttonHover) {
      this.setState({
        buttonHover: true,
        buttonStyle: {
          color: this.props.processes[this.state.activeID].colour
        }
      })
    } else {
      this.setState({
        buttonHover: false,
        buttonStyle: {
          color: '#ffffff'
        }
      })
    }
  }

  render() {
    const { processes } = this.props
    const { activeProcess } = this.state
    return (
      <main className="component process_component">
        <section className="wrapper">
          <div className="wrapper_inner">
            <ProcessPieceDefault process={activeProcess} />
          </div>

          />
        </section>
      </main>
    )
  }
}

