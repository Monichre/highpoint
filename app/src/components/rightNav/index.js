import React, { Component, Fragment } from 'react'
import { MorphReplaceResize } from 'react-svg-morph'
import Hamburger from '../hamburger'
import CompassRuler from '../compassRuler'
import CloseMenu from '../closeMenu'
import { Keyframes, animated, config } from 'react-spring'
import { sleep } from '../../utils'
import './_rn.scss'

const fast = { ...config.stiff, restSpeedThreshold: 1, restDisplacementThreshold: 0.01 }

const Sidebar = Keyframes.Spring({
  peek: [
    { delay: 500, from: { x: 200 }, to: { x: 0 }, config: fast },
    { delay: 800, to: { x: 200 }, config: config.slow }
  ],
  open: { to: { x: 0 }, config: config.default },
  // or async functions with side-effects
  close: async call => {
    await sleep(400)
    await call({ to: { x: 200 }, config: config.gentle })
  }
})

// Creates a keyframed trail
const Content = Keyframes.Trail({
  peek: [{ delay: 600, from: { x: 200, opacity: 0 }, to: { x: 0, opacity: 1 } }, { to: { x: 200, opacity: 0 } }],
  open: { delay: 100, to: { x: 0, opacity: 1 } },
  close: { to: { x: 200, opacity: 0 } }
})

const items = properties => properties.map(property => <li>{property.title}</li>)

export default class RightNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeComponent: 'compass',
      open: false
    }
  }

  toggleMenu = e => {
    console.log(e)
    e.preventDefault()
    const { open, activeComponent } = this.state

    if (!open && activeComponent === 'hamburger') {
      this.setState({
        open: true,
        activeComponent: 'close'
      })
    }
    if (open && activeComponent === 'close') {
      this.setState({
        open: false,
        activeComponent: 'hamburger'
      })
    }
    this.setState({
      open: false,
      activeComponent: 'compass'
    })
  }

  toggleCompass = () =>
    this.state.activeComponent === 'close'
      ? null
      : this.setState({
          activeComponent: this.state.activeComponent === 'compass' ? 'hamburger' : 'compass'
        })

  setCompass = () => (this.state.activeComponent === 'close' ? null : this.setState({ activeComponent: 'compass' }))

  compassClick = () =>
    this.state.activeComponent !== 'close' ? this.setState({ activeComponent: 'close' }) : 'hamburger'

  render() {
    const componentMap = {
      hamburger: <Hamburger key="hamburger" />,
      close: <CloseMenu key="close" />,
      compass: <CompassRuler key="compass" />
    }
    const { activeComponent, open } = this.state
    const { properties } = this.props
    const sideBarState = open ? 'open' : 'close'
    const active = comp => componentMap[comp]

    return (
      <section className={`right_nav`}>
        <div className="inner" style={{ position: 'relative' }}>
          <ul style={{ listStyle: 'none' }} className="top">
            <li onMouseEnter={this.toggleCompass} onMouseLeave={this.setCompass} onClick={this.toggleMenu}>
              <MorphReplaceResize>{active(activeComponent)}</MorphReplaceResize>
            </li>
          </ul>
          <Sidebar native state={sideBarState}>
            {({ x }) => (
              <animated.ul className="sidebar" style={{ transform: x.interpolate(x => `translate3d(${x}%,0,0)`) }}>
                <Content
                  native
                  keys={items(properties).map((_, i) => i)}
                  config={{ tension: 200, friction: 20 }}
                  state={sideBarState}>
                  {items(properties).map((item, i) => ({ x, ...props }) => (
                    <animated.div
                      style={{
                        transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
                        ...props
                      }}>
                      <div className={i === 0 ? 'middle' : ''}>{item}</div>
                    </animated.div>
                  ))}
                </Content>
              </animated.ul>
            )}
          </Sidebar>
          <ul style={{ listStyle: 'none' }} className="bottom">
            <li>
              <span className="">Developer</span>
            </li>
            <li>
              <span className="">Owner</span>
            </li>
            <li>
              <span className="">Operator</span>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}
