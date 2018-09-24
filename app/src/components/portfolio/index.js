import React, { Component, Fragment } from "react";
import ReactPageScroller from "react-page-scroller";
import { processPortfolioLines, cornerLines } from "../lines";
import { PageArrowDown } from "../icons";
import AppDispatcher from "../../flux/dispatchers";
import { PortfolioGrid } from "../grid/portfolioGrid";
import { PortfolioCard } from "../portfolioCard";
import { BROWSER } from "../../utils/browser";
import AboutUs from "../aboutUs";
import _ from "lodash";

const { status } = BROWSER.isMobile();

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      upArrow: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activePropertyCard !== this.props.activePropertyCard) {
      this._pageScroller.goToPage(nextProps.activePropertyCard);
    }
  }

  componentDidMount() {
    const { isPhone } = BROWSER.isMobile();
    cornerLines();
    if (!isPhone) {
      processPortfolioLines();
    }
  }

  activeCardEmitter = (e, i) => {
    e.preventDefault();
    this._pageScroller.goToPage(i);
  };

  pageOnChange = num => {
    AppDispatcher.dispatch({
      action: "go-to-property-card",
      propertyId: num
    });
    this.setState({ currentPage: num });
  };

  arrowClick = e => {
    e.preventDefault();
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
        <section className={`wrapper`}>
          <PortfolioGrid>
            <ReactPageScroller
              ref={c => (this._pageScroller = c)}
              pageOnChange={this.pageOnChange}
              onScroll={this.scrollWheelHandler}
              animationTimer={500}
              onWheel={this.scrollWheelHandler}
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
            </ReactPageScroller>
          </PortfolioGrid>
        </section>
        <div className="arrows" onClick={e => this.arrowClick(e)}>
          {this.state.currentPage === 0 || this.state.currentPage === 1 ? (
            <Fragment>
              <PageArrowDown />
              <PageArrowDown />
              <PageArrowDown />
              <PageArrowDown />
            </Fragment>
          ) : null}
        </div>
      </main>
    );
  }
}
