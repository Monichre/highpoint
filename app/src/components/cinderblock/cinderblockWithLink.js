import React from 'react'
import {Link} from 'react-router-dom'
import CinderBlockSVG from '../cinderblock'

const CinderBlockWithLink = ({linkTo = '/', className, ...rest}) => (
  <div className={`cinderblock_container ${className}`}>
    <Link to={linkTo}>
      <CinderBlockSVG {...rest} />
    </Link>
  </div>
)

export default CinderBlockWithLink
