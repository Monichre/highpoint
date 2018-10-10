import React, { Component } from "react";
import AppDispatcher from "../../../flux/dispatchers";
import { CompassRuler } from "../../icons";
import NavBottom from "../NavBottom";
import PortfolioSideBar from "../../portfolioSideBar";
import superslide from "../../superslide";
import { BROWSER } from "../../../utils/browser";
import PropertiesLink from "../../propertyLink";

const { status } = BROWSER.isMobile();

export default class DefaultRightNav extends Component {
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
    if (nextProps.activeMenuItem !== this.props.activeMenuItem) {
      const { open, initialMenuHasRendered, activePropertyCard } = this.state;
      if (nextProps.activeMenuItem === 2) {
        if (!initialMenuHasRendered && !activePropertyCard) {
          this.setState(
            {
              open: true,
              initialMenuHasRendered: true,
              activePropertyCard: nextProps.activeMenuItem - 1
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
      if (nextProps.activeMenuItem) {
        this.setState({
          activePropertyCard: nextProps.activeMenuItem - 1
        });
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
      const sidebarBottom = document.querySelector(
        ".right_nav .inner ul.bottom"
      );
      const sidebarMenu = new superslide({
        slider: slider,
        content: content,
        slideContent: false,
        animation: "slideBottom",
        beforeClose: () => {
          // sidebarBottom.classList.remove('sidebar_active')
          this.props.parentAddLinesAnimation();
        },
        beforeOpen: () => {
          // sidebarBottom.classList.add('sidebar_active')
          this.props.parentRemoveLinesAnimation();
        },
        width: "10vw",
        height: "70vh"
      });
      this.sidebarMenu = sidebarMenu;
      // if (activePropertyCard === 1) {
      //   this.props.parentRemoveLinesAnimation();
      //   this.sidebarMenu.open();
      //   burgerIcon.classList.add("open");
      // }
    }
  }

  toggleSideBar = e => {
    if (e) {
      e.preventDefault();
    }

    const { open } = this.state;
    open ? this.sidebarMenu.close() : this.sidebarMenu.open();
    this.setState({
      open: !open,
      initialMenuHasRendered: true
    });
  };

  setActivePropertyCard = (i, e) => {
    e.preventDefault();
    console.log("activePropertyCard: ", i);
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

    return (
      <section className={`right_nav`}>
        <div className="inner" style={{ position: "relative" }}>
          <ul style={{ listStyle: "none" }} className="top">
            <SideBarTrigger
              isPortfolioPage={isPortfolioPage}
              toggleSideBar={this.toggleSideBar}
            >
              {isPortfolioPage ? (
                <PropertiesLink className={`${open ? "open" : ""}`} />
              ) : (
                <CompassRuler key="compass" />
              )}
            </SideBarTrigger>
          </ul>
          <NavBottom isMobile={status} />
        </div>
        <PortfolioSideBar
          {...this.props}
          setActivePropertyCard={this.setActivePropertyCard}
        />
      </section>
    );
  }
}

const SideBarTrigger = ({ isPortfolioPage, toggleSideBar, children }) => (
  <li
    className="sidebar_trigger"
    onClick={isPortfolioPage ? toggleSideBar : null}
  >
    {children}
  </li>
);
