import React from 'react'
import {Link} from 'react-router-dom'
import CinderBlock from '../cinderblock'

const ButtonLink = ({property}) => (
  <Link className='button__link' to={`/process/${property.title}`}> View Process </Link>
)

const ViewProcessButton = ({property, className}) => (
  <div className={`view_process_button ${property.isAProcessItem ? 'is_a_process_item' : 'not_process_item'}`}>
    {
      property.isAProcessItem ? <ButtonLink property={property} /> : null
    }
    <CinderBlock context='propertyCard' className={className} />
  </div>
)
export default ViewProcessButton
