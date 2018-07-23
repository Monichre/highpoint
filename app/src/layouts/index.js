import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import CircularNav from '../components/circularNav'
import {Header} from '../components/header'
import LeftNav from '../components/leftNav'
import RightNav  from '../components/rightNav'
// import Footer from '../components/footer'

import '../../sass/style.scss'

const TemplateWrapper = ({ location, children }) => (
  <div>
    <Helmet title="Highpoint Template" />
    <Header {...location} />
    <LeftNav {...location}  />
    {children()}
    <RightNav />
    <CircularNav location={location} />
    
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
