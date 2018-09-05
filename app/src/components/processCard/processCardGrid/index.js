import React from 'react'
import ThreeRowsGrid from './threeRows'
import FourRowsGrid from './fourRows'
import FiveRowsGrid from './fiveRows'

const renderGrid = props => {
  if (props.process.beforeImages.length === 4) {
    return <FourRowsGrid {...props} />
  } else if (props.process.beforeImages.length === 5) {
    return <FiveRowsGrid {...props} />
  } else {
    return <ThreeRowsGrid {...props} />
  }
}

const ProcessCardGrid = props => renderGrid(props)

export default ProcessCardGrid
