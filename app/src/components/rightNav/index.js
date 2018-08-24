import React, { Component } from 'react'
import { MorphReplaceResize } from 'react-svg-morph'
import Hamburger from '../hamburger'
import CompassRuler from '../compassRuler'
import CloseMenu from '../closeMenu'
import { Keyframes, animated, config } from 'react-spring'
import { Link } from 'react-router-dom'
import { Content } from './content'
import { Sidebar, fast, items } from './sidebar'
import _ from 'lodash'
import './_rn.scss'


export default class RightNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeComponent: 'compass',
      open: false
    }
  }

  toggleMenu = e => {
    e.preventDefault()

    const { open, activeComponent } = this.state
    if (!open) {
      this.setState({
        open: true,
        activeComponent: 'hamburger'
      })
      return
    }
    if (open) {
      this.setState({
        open: false,
      })
      return
    }
  }

  toggleCompass = () => {
  
    if(this.state.activeComponent === 'compass') {
      this.setState({
        activeComponent: 'hamburger'
      })
    }
    if (this.state.activeComponent === 'hamburger') {
      this.setState({
        activeComponent: 'compass'
      })
    }
  }
 
  setCompass = () => {
    this.setState({ 
      activeComponent: this.state.activeComponent === 'close' ? 'hamburger' : 'compass'
    })
  }

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
            <li onMouseEnter={open ? null : _.throttle(this.toggleCompass, 300)} onClick={this.toggleMenu} onMouseLeave={open ? null : _.throttle(this.toggleCompass, 300)} className={`sidebar_menu_link ${activeComponent} ${open ? 'open' : 'close'}`}>
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
