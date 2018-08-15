import React, { Component } from 'react'
import { QuiltedGrid } from '../components/grid/quilted'
import AppStore from '../flux/stores'
import { cornerLines, processPortfolioLines } from '../components/lines'
import {ProcessCardPreview} from '../components/processCardPreview'

class ProcessPage extends Component {
  componentDidMount() {
    processPortfolioLines()
    cornerLines()
  }
  render() {
    const { processes } = AppStore.data
    return (
      <div className="process_page component">
      <h1 style={{textAlign: 'center', textTransform: 'uppercase', fontSize: '45px', letterSpacing: '4px', marginTop: '50px'}}>Process</h1>
        <QuiltedGrid>
          {processes.map(process => <ProcessCardPreview process={process} /> )}
        </QuiltedGrid>
      </div>
    )
  }
}

export default ProcessPage


