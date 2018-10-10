import React, { Component, Fragment } from "react";
import ReactPageScrollerFork from "../ReactPageScrollerFork";
import { processPortfolioLines } from "../lines";
import { PageArrowDown } from "../icons";
import AppDispatcher from "../../flux/dispatchers";
import { PortfolioGrid } from "../grid/portfolioGrid";
import { PortfolioCard } from "../portfolioCard";
import { BROWSER } from "../../utils/browser";
import AboutUs from "../aboutUs";
import _ from "lodash";

const { status } = BROWSER.isMobile();

export default class DefaultPortfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      upArrow: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activePropertyCard === 0) {
      this._pageScroller.goToPage(1);
    }
    if (nextProps.activePropertyCard !== this.props.activePropertyCard) {
      this._pageScroller.goToPage(nextProps.activePropertyCard);
    }
  }

  componentDidMount() {
    const { isPhone } = BROWSER.isMobile();
    if (!isPhone) {
      processPortfolioLines();
    }
    console.log(this._pageScroller);
    document.body.addEventListener("scroll", e => {
      console.log(e.target);
    });
    document.querySelector(".grid div").addEventListener("scroll", e => {
      console.log(e.target);
    });
  }

  activeCardEmitter = (e, i) => {
    e.preventDefault();
    this._pageScroller.goToPage(i);
  };

  pageOnChange = num => {
    AppDispatcher.dispatch({
      action: "set-active-menu-item",
      menuItemIndex: num
    });
    this.setState({ currentPage: num }, () => {
      setTimeout(() => {
        const sidebar = document.querySelector(".sidebar_properties_list");
        const activeLink = document.querySelector(
          ".sidebar_link.menu_link.active"
        );
        if (activeLink) {
          activeLink.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest"
          });
        }
      }, 500);
    });
  };

  arrowClick = () => {
    this._pageScroller.goToPage(this.state.currentPage++);
  };

  render() {
    const { properties, aboutUsContent, activePropertyCard } = this.props;
    const allVentures = _.sortBy(properties, item => item.order);

    allVentures.unshift(
      <AboutUs
        content={aboutUsContent.content}
        allVentures={allVentures}
        goToPage={this.activeCardEmitter}
      />
    );

    return (
      <main
        className="portfolio component portfolio_component"
        style={{ position: "relative" }}
      >
        <PortfolioGrid>
          <ReactPageScrollerFork
            ref={c => (this._pageScroller = c)}
            pageOnChange={this.pageOnChange}
            height={window.clientHeight}
            width={window.clientHeight}
            animationTimer={1000}
          >
            {allVentures.map(
              (property, i) =>
                i === 0 ? (
                  property
                ) : (
                  <PortfolioCard
                    mobileStatus={status}
                    arrowClick={this.arrowClick}
                    index={i}
                    property={property}
                    key={i}
                  />
                )
            )}
          </ReactPageScrollerFork>
        </PortfolioGrid>
        <div className="arrows" onClick={this.arrowClick}>
          {this.state.currentPage === 0 || this.state.currentPage === 1 ? (
            <Fragment>
              <PageArrowDown />
              <PageArrowDown />
            </Fragment>
          ) : null}
        </div>
      </main>
    );
  }
}
