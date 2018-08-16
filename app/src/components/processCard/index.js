import React from 'react'
import FourRowsGrid from '../grid/fourRows'
import FiveRowsGrid from '../grid/fiveRows'
import ProcessCardContainer from './container'
import ProcessCardGrid from '../grid/processCardGrid'
import './_processCard.scss'

const renderGrid = props => {
  if (props.process.beforeImages.length === 4) {
    return (
      <ProcessCardContainer {...props}>
        <FourRowsGrid {...props} />
      </ProcessCardContainer>
    )
  } else if (props.process.beforeImages.length === 5) {
    return (
      <ProcessCardContainer {...props}>
        <FiveRowsGrid {...props} />
      </ProcessCardContainer>
    )
  } else {
    return (
      <ProcessCardContainer {...props}>
        <ProcessCardGrid {...props} />
      </ProcessCardContainer>
    )
  }
}

export const ProcessCard = props => renderGrid(props)
