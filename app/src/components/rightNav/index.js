import React, { Component } from 'react'
import AppDispatcher from '../../flux/dispatchers'
import CompassRuler from '../compassRuler'
import CloseMenu from '../closeMenu'
import superslide from '../superslide'
import MenuLink from '../menuLink'
import _ from 'lodash'
// import './_rn.scss'

export default class RightNav extends Component {
  state = {
    open: false,
    isPortfolioPage: false,
    pathname: '',
    activePropertyCard: 0
  }

  componentWillMount() {
    if (
      (this.props.location && this.props.location.pathname.split('/').includes('portfolio')) ||
      window.location.pathname.split('/').includes('portfolio')
    ) {
      this.setState({
        // open: true,
        isPortfolioPage: true,
        pathname: '/portfolio'
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activePropertyCard !== this.props.activePropertyCard) {
      if (nextProps.activePropertyCard === 1) {
        const { open } = this.state
        open ? this.sidebarMenu.close() : this.sidebarMenu.open()
        this.setState({
          open: !open
        })
      }
    }
  }

  componentDidUpdate

  componentDidMount() {
    const { isPortfolioPage, activePropertyCard } = this.state

    if (isPortfolioPage) {
      const slider = document.getElementById('sidebar_menu')
      const content = document.querySelector('.sidebar_properties_list')
      const burgerIcon = document.querySelector('.sidebar_trigger .contact-burgerIcon')
      const sidebarMenu = new superslide({
        slider: slider,
        content: content,
        slideContent: false,
        animation: 'slideBottom',
        width: '10vw',
        height: '70vh'
      })
      this.sidebarMenu = sidebarMenu
      if (activePropertyCard === 1) {
        this.sidebarMenu.open()
        burgerIcon.classList.add('open')
      }
    }
  }

  toggleSideBar = e => {
    e.preventDefault()
    const { open } = this.state
    open ? this.sidebarMenu.close() : this.sidebarMenu.open()
    this.setState({
      open: !open
    })
  }

  setActivePropertyCard = (i, e) => {
    e.preventDefault()
    this.setState({
      activePropertyCard: i
    })
    AppDispatcher.dispatch({
      action: 'go-to-property-card',
      propertyId: i
    })
  }

  render() {
    const { open, isPortfolioPage, activePropertyCard } = this.state
    const { properties, location } = this.props
    const contextualIcon = isPortfolioPage ? (
      <CloseMenu className={`${open ? 'open' : ''}`} key="close" />
    ) : (
      <CompassRuler key="compass" />
    )
    const propertiesText =
      isPortfolioPage && activePropertyCard !== 1 ? (
        <span className={`properties_text ${open ? 'open' : ''}`}>Properties</span>
      ) : null
    const SideBar =
      isPortfolioPage && activePropertyCard === 0 ? (
        <div id="sidebar_menu">
          <ul style={{ listStyle: 'none' }} className="sidebar_properties_list">
            <li key={'back to top'} onClick={e => this.setActivePropertyCard(0, e)} className="menu_link sidebar_link">
              Back to Top
            </li>
            {_.sortBy(properties, item => item.order).map((property, i) => (
              <MenuLink
                key={i}
                sidebar={true}
                link={property.title}
                index={i + 1}
                onClick={this.setActivePropertyCard}
              />
            ))}
          </ul>
        </div>
      ) : null

    return (
      <section className={`right_nav`}>
        <div className="inner" style={{ position: 'relative' }}>
          <ul style={{ listStyle: 'none' }} className="top">
            <li className="sidebar_trigger" onClick={this.toggleSideBar}>
              {contextualIcon}
              {propertiesText}
            </li>
          </ul>
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
        {SideBar}
      </section>
    )
  }
}
