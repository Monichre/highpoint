import React, { Component } from 'react'
import Process from '../components/process'
import {config, animated } from 'react-spring'

class ProcessPage extends Component {
  render() {
    const processes = this.props.data.allContentfulProcess.edges.map(process => {
      return {
        ...process.node
      }
    })
    return (
      <animated.div  style={{ ...this.props.style }} className="portfolio">
      <Process processes={processes} />
      </animated.div>
    )
  }
}

export default ProcessPage