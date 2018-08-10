import React, { Component } from 'react'
import { QuiltedGrid } from '../components/grid/quilted'
import AppStore from '../flux/stores'
import { cornerLines, processPortfolioLines } from '../components/lines'
import {ProcessCardPreview} from '../components/processCardPreview'
import { animated } from 'react-spring'
import {Link} from 'react-router-dom'

class ProcessPage extends Component {
  componentDidMount() {
    processPortfolioLines()
    cornerLines()
  }
  render() {
    const { processes } = AppStore.data
    return (
      <animated.div style={{ ...this.props.style }} className="process_page component">
      <h1 style={{textAlign: 'center', textTransform: 'uppercase', fontSize: '45px', letterSpacing: '4px'}}>Process</h1>
        <QuiltedGrid>
          {processes.map(process => <ProcessCardPreview process={process} /> )}
        </QuiltedGrid>
      </animated.div>
    )
  }
}

export default ProcessPage


