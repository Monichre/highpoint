import React, { Component } from "react";
import AppDispatcher from "../../flux/dispatchers";
import MobileRightNav from "./mobileRightNav";
import DefaultRightNav from "./defaultRightNav";
import { BROWSER } from "../../utils/browser";

const { status } = BROWSER.isMobile();

export default class RightNav extends Component {
  state = {
    open: false,
    isPortfolioPage: false,
    pathname: "",
    activePropertyCard: false,
    initialMenuHasRendered: false
  };

  componentWillMount() {
    if (
      (this.props.location &&
        this.props.location.pathname.split("/").includes("portfolio")) ||
      window.location.pathname.split("/").includes("portfolio")
    ) {
      this.setState({
        isPortfolioPage: true,
        pathname: "/portfolio"
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activePropertyCard !== this.props.activePropertyCard) {
      if (nextProps.activePropertyCard === 2) {
        const { open, initialMenuHasRendered, activePropertyCard } = this.state;
        if (!initialMenuHasRendered && !activePropertyCard) {
          this.setState(
            {
              open: !open,
              initialMenuHasRendered: true,
              activePropertyCard: nextProps.activePropertyCard
            },
            () => {
              open ? this.sidebarMenu.close() : this.sidebarMenu.open();
            }
          );
        }
      }
    }
  }

  // componentDidMount() {
  //   const { isPortfolioPage, activePropertyCard } = this.state

  //   if (isPortfolioPage) {
  //     const slider = document.getElementById('sidebar_menu')
  //     const content = document.querySelector('.sidebar_properties_list')
  //     const burgerIcon = document.querySelector(
  //       '.sidebar_trigger hover-link-icon'
  //     )
  //     const sidebarMenu = new superslide({
  //       slider: slider,
  //       content: content,
  //       slideContent: false,
  //       animation: 'slideBottom',
  //       width: '10vw',
  //       height: '70vh'
  //     })
  //     this.sidebarMenu = sidebarMenu
  //     if (activePropertyCard === 1) {
  //       this.sidebarMenu.open()
  //       burgerIcon.classList.add('open')
  //     }
  //   }
  // }

  render() {
    return status ? <MobileRightNav /> : <DefaultRightNav />;
  }
}
