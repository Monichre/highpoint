import React from 'react'
import Home from '../components/home'
import {config, animated } from 'react-spring'

const HomePage = ({style}, props) => 
<animated.div style={{ ...style }}>
  <Home />
</animated.div>

export default HomePage
