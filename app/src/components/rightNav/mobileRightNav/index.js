import React, { Component, Fragment } from "react";
import AppDispatcher from "../../../flux/dispatchers";
import CinderBlock from "../../cinderblock";
import MobilePortfolioSidebar from "../../mobilePortfolioSidebar";
import superslide from "../../superslide";
import { HoverLinkIcon } from "../../hoverLink/hoverLinkIcon";
import { BROWSER } from "../../../utils/browser";

const { status, isPhone } = BROWSER.isMobile();

export default class MobileRightNav extends Component {
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
    if (isPhone === false) {
      if (nextProps.activePropertyCard !== this.props.activePropertyCard) {
        if (nextProps.activePropertyCard === 2) {
          const {
            open,
            initialMenuHasRendered,
            activePropertyCard
          } = this.state;
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
  }

  componentDidMount() {
    const { isPortfolioPage, activePropertyCard } = this.state;
    if (isPortfolioPage) {
      const slider = document.getElementById("mobile_sidebar_menu");
      const content = document.querySelector(".sidebar_properties_list");
      const burgerIcon = document.querySelector(
        ".sidebar_trigger hover-link-icon"
      );
      const sidebarMenu = new superslide({
        slider: slider,
        content: content,
        slideContent: false,
        animation: "slideRight",
        width: isPhone ? "50vw" : "15vw",
        height: "100vh"
      });
      this.sidebarMenu = sidebarMenu;
      if (activePropertyCard === 1 && isPhone === false) {
        this.sidebarMenu.open();
        burgerIcon.classList.add("open");
      }
    }
  }

  toggleSideBar = e => {
    console.log("im clicking");
    if (e) {
      console.log(e);
      e.preventDefault();
    }

    const { open } = this.state;
    open ? this.sidebarCloseAnimation() : this.sidebarOpenAnimation();
    this.setState({
      open: !open
    });
  };

  sidebarCloseAnimation = () => {
    if (isPhone) {
      document.querySelector("body").classList.remove("mobile_sidebar_open");
    } else {
    }
    this.sidebarMenu.close();
  };

  sidebarOpenAnimation = () => {
    if (isPhone) {
      document.querySelector("body").classList.add("mobile_sidebar_open");
    }
    this.sidebarMenu.open();
  };

  setActivePropertyCard = (i, e) => {
    e.preventDefault();
    this.setState({
      activePropertyCard: i
    });
    AppDispatcher.dispatch({
      action: "go-to-property-card",
      propertyId: i
    });
  };

  render() {
    const { open, isPortfolioPage } = this.state;

    const SideBarTrigger = () => (
      <li
        className="logo_link sidebar_trigger"
        style={{ width: "100%" }}
        onClick={this.toggleSideBar}
      >
        <CinderBlock
          context="navigation"
          linkTo="/"
          id="cinderblock_navigation"
        />
      </li>
    );
    const ContextualLink = () =>
      isPortfolioPage ? (
        <li
          id="mobile-properties"
          className={`hover-link properties ${open ? "open" : ""}`}
          onClick={e => this.toggleSideBar(e)}
          style={{ lineHeight: 0.02 }}
        >
          {status ? null : (
            <div className={`text`}>
              <span className="u-shadow">Properties</span>
            </div>
          )}
          <HoverLinkIcon />
        </li>
      ) : (
        <SideBarTrigger />
      );

    return (
      <Fragment>
        <div className="inner" style={{ position: "relative" }}>
          <ul style={{ listStyle: "none" }} className="top">
            <ContextualLink />
          </ul>
        </div>
        <MobilePortfolioSidebar
          {...this.props}
          setActivePropertyCard={this.setActivePropertyCard}
          toggleSideBar={this.toggleSideBar}
        />
      </Fragment>
    );
  }
}
