import React from 'react'
import CinderBlockWithAnimation from './cinderblockWithAnimation'
import CinderBlockSVG from './cinderblock'

const CinderBlock = ({context, ...rest}) => context === 'navigation' ? <CinderBlockWithAnimation {...rest} /> : <CinderBlockSVG {...rest} />

export default CinderBlock
