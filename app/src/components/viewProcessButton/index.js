import React from 'react'
import {Link} from 'react-router-dom'
import CinderBlock from '../cinderblock'

const ViewProcessButton = ({property, className}) => (
  <div className='view_process_button'>
    <Link className='button__link' to={`/process/${property.title}`}>
      View Process
    </Link>
    {
      property.isAProcessItem ? <CinderBlock context='propertyCard' className={className} /> : null
    }

  </div>
)
export default ViewProcessButton
