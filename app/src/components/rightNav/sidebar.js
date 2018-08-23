import React from 'react'
import { Keyframes, animated, config } from 'react-spring'
import { Link } from 'react-router-dom'
import { sleep } from '../../utils'

const fast = { ...config.stiff, restSpeedThreshold: 1, restDisplacementThreshold: 0.01 }

export const Sidebar = Keyframes.Spring({
  peek: [
    { delay: 500, from: { x: 200 }, to: { x: 0 }, config: fast },
    { delay: 800, to: { x: 200 }, config: config.slow }
  ],
  open: { to: { x: 0 }, config: config.default },
  close: async call => {
    await sleep(400)
    await call({ to: { x: 200 }, config: config.gentle })
  }
})

export const items = properties =>
  properties.map(property => (
    <li>
      <Link to='/properties'>{property.title}</Link>
    </li>
  ))
