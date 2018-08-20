import React, { Component } from 'react'
import { QuiltedGrid } from '../components/grid/quilted'
import AppStore from '../flux/stores'
import { cornerLines, processPortfolioLines } from '../components/lines'
import { ProcessCardPreview } from '../components/processCardPreview'
import _ from 'lodash'

class ProcessPage extends Component {
  componentDidMount () {
    processPortfolioLines()
    cornerLines()
  }
  render () {
    const { processes } = AppStore.data
    const sorted = _.sortBy(processes, (process) => process.order)
    return (
      <div className='process_page component'>
        <h1
          style={{
            textAlign: 'center',
            textTransform: 'uppercase',
            fontSize: '45px',
            letterSpacing: '4px',
            marginTop: '50px'
          }}>
          Process
        </h1>
        <QuiltedGrid>
          {sorted.map(process => (
            <ProcessCardPreview process={process} />
          ))}
        </QuiltedGrid>
      </div>
    )
  }
}

export default ProcessPage
