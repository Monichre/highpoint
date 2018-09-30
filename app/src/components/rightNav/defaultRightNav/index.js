import React, { Component } from "react";
import AppDispatcher from "../../../flux/dispatchers";
import { CompassRuler } from "../../icons";
import HoverLink from "../../hoverLink";
import NavBottom from "../NavBottom";
import PortfolioSidear from "../../portfolioSideBar";
import superslide from "../../superslide";
import { BROWSER } from "../../../utils/browser";

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
    console.log(this.props);
    console.log(nextProps);
    if (nextProps.activePropertyCard !== this.props.activePropertyCard) {
      const { open, initialMenuHasRendered, activePropertyCard } = this.state;
      if (nextProps.activePropertyCard === 2) {
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
      if (!initialMenuHasRendered) {
        this.setState(
          {
            open: true,
            initialMenuHasRendered: true
          },
          () => {
            this.sidebarMenu.open();
          }
        );
      }
    }
  }

  componentDidMount() {
    const { isPortfolioPage, activePropertyCard } = this.state;

    if (isPortfolioPage) {
      const slider = document.getElementById("sidebar_menu");
      const content = document.querySelector(".sidebar_properties_list");
      const burgerIcon = document.querySelector(
        ".sidebar_trigger hover-link-icon"
      );
      const sidebarMenu = new superslide({
        slider: slider,
        content: content,
        slideContent: false,
        animation: "slideBottom",
        width: "10vw",
        height: "70vh"
      });
      this.sidebarMenu = sidebarMenu;
      if (activePropertyCard === 1) {
        this.sidebarMenu.open();
        burgerIcon.classList.add("open");
      }
    }
  }

  toggleSideBar = e => {
    if (e) {
      e.preventDefault();
    }

    const { open } = this.state;
    open ? this.sidebarMenu.close() : this.sidebarMenu.open();
    this.setState({
      open: !open
    });
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
      <li className="sidebar_trigger" onClick={this.toggleSideBar}>
        <CompassRuler key="compass" />
      </li>
    );
    const ContextualLink = () =>
      isPortfolioPage ? (
        <HoverLink
          onClick={this.toggleSideBar}
          link="Properties"
          className={`properties ${open ? "open" : ""}`}
        />
      ) : (
        <SideBarTrigger />
      );

    return (
      <section className={`right_nav`}>
        <div className="inner" style={{ position: "relative" }}>
          <ul style={{ listStyle: "none" }} className="top">
            <ContextualLink />
          </ul>
          <NavBottom isMobile={status} />
        </div>
        <PortfolioSidear
          {...this.props}
          setActivePropertyCard={this.setActivePropertyCard}
        />
      </section>
    );
  }
}
