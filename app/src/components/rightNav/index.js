import React, { Component } from 'react'
import AppDispatcher from '../../flux/dispatchers'
import CompassRuler from '../compassRuler'
import CloseMenu from '../closeMenu'
import superslide from '../superslide'
import NavBottom from './NavBottom'
import PortfolioSidear from '../portfolioSideBar'

export default class RightNav extends Component {
  state = {
    open: false,
    isPortfolioPage: false,
    pathname: '',
    activePropertyCard: false,
    initialMenuHasRendered: false

  }

  componentWillMount() {
    if (
      (this.props.location && this.props.location.pathname.split('/').includes('portfolio')) ||
      window.location.pathname.split('/').includes('portfolio')
    ) {
      this.setState({
        isPortfolioPage: true,
        pathname: '/portfolio'
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activePropertyCard !== this.props.activePropertyCard) {
      if (nextProps.activePropertyCard === 2) {
        const { open, initialMenuHasRendered, activePropertyCard } = this.state
        if(!initialMenuHasRendered && !activePropertyCard) {
          this.setState({
            open: !open,
            initialMenuHasRendered: true,
            activePropertyCard: nextProps.activePropertyCard
          }, () => {
            open ? this.sidebarMenu.close() : this.sidebarMenu.open()
          })
        }
      }
    }
  }

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
    const { open, isPortfolioPage } = this.state
    
    const contextualIcon = isPortfolioPage ? (
      <CloseMenu className={`${open ? 'open' : ''}`} key="close" />
    ) : (
      <CompassRuler key="compass" />
    )
  
    const propertiesText =
      isPortfolioPage ? (
        <span className={`properties_text ${open ? 'open' : ''}`}>Properties</span>
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
          <NavBottom />
        </div>
        <PortfolioSidear {...this.props} setActivePropertyCard={this.setActivePropertyCard} /> 
      </section>
    )
  }
}

