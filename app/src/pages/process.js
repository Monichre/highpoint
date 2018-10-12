import React, { Component } from "react";
import { QuiltedGrid } from "../components/grid/quilted";
import { ProcessCardPreview } from "../components/processCardPreview";
import { processPortfolioLines } from "../components/lines";
import { BROWSER } from "../utils/browser";
import AppStore from "../flux/stores";
import _ from "lodash";

const { status } = BROWSER.isMobile();

class ProcessPage extends Component {
  componentDidMount() {
    if (!status) {
      processPortfolioLines();
    }
  }
  render() {
    const { processes } = AppStore.data;
    const sorted = _.sortBy(processes, process => process.order);
    return (
      <div className="process_page component">
        <h1 className="page_title">Process</h1>
        <QuiltedGrid>
          {sorted.map((process, i) => (
            <ProcessCardPreview process={process} key={i} />
          ))}
        </QuiltedGrid>
      </div>
    );
  }
}

export default ProcessPage;
