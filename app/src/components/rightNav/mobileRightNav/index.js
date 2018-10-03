import React, { Component, Fragment } from "react";
import AppDispatcher from "../../../flux/dispatchers";
import CinderBlock from "../../cinderblock";
import MobilePortfolioSidebar from "../../mobilePortfolioSidebar";
import superslide from "../../superslide";
import { HoverLinkIcon } from "../../hoverLinkIcon";
import { BROWSER } from "../../../utils/browser";
import { sleep } from "../../../utils";
import Modal from "../../modal";

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
    if (status === false) {
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
    const _this = this;
    if (isPortfolioPage) {
      const slider = document.getElementById("mobile_sidebar_menu");
      const content = document.querySelector(".sidebar_properties_list");
      const burgerIcon = document.querySelector(
        ".sidebar_trigger hover-link-icon"
      );
      const closeMenu = document.querySelector(".close_menu_side");
      const sidebarMenu = new superslide({
        slider: slider,
        content: content,
        slideContent: false,
        allowContentInteraction: true,
        beforeClose: this.sideBarCloseCallback,
        beforeOpen: this.sideBarOpenCallback,
        animation: "slideRight",
        width: "50vw",
        height: "100vh"
      });
      this.sidebarMenu = sidebarMenu;
      closeMenu.addEventListener("click", () => {
        this.toggleSideBar();
      });
      if (activePropertyCard === 1 && status === false) {
        this.sidebarMenu.open();
        burgerIcon.classList.add("open");
      }
    }
  }

  sideBarCloseCallback = () => {
    document.querySelector("body").classList.remove("mobile_sidebar_open");
    this.props.parentAddLinesAnimation();
    this.setState({
      open: false
    });
  };

  sideBarOpenCallback = () => {
    this.props.parentRemoveLinesAnimation();
    document.querySelector("body").classList.add("mobile_sidebar_open");
    this.setState({
      open: true
    });
  };

  toggleSideBar = e => {
    if (e) {
      e.preventDefault();
    }
    this.sidebarMenu.toggle();
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

    const conditionalSideBar = isPortfolioPage ? (
      <Modal>
        <MobilePortfolioSidebar
          {...this.props}
          setActivePropertyCard={this.setActivePropertyCard}
        />
      </Modal>
    ) : null;
    return (
      <Fragment>
        <div className="inner" style={{ position: "relative" }}>
          <ul style={{ listStyle: "none" }} className="top">
            <SideBarTrigger toggleSideBar={this.toggleSideBar}>
              {isPortfolioPage ? (
                <HoverLinkIcon className={`${open ? "open" : ""}`} />
              ) : (
                <CinderBlock
                  context="navigation"
                  linkTo="/"
                  id="cinderblock_navigation"
                />
              )}
            </SideBarTrigger>
          </ul>
        </div>
        {conditionalSideBar}
      </Fragment>
    );
  }
}

const SideBarTrigger = props => (
  <li className="sidebar_trigger" onClick={props.toggleSideBar}>
    {props.children}
  </li>
);
