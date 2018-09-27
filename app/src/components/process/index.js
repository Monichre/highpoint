import React, { Component } from "react";
import { processPortfolioLines, cornerLines } from "../lines";
import ProcessCard from "../processCard";
import AppStore from "../../flux/stores";
import { BROWSER } from "../../utils/browser";

const { status } = BROWSER.isMobile();

export default class Process extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const { processes, properties } = AppStore.data;
    const title = decodeURIComponent(window.location.pathname.split("/").pop());
    const property = properties.find(property => property.title === title);
    const process = property
      ? { ...property.process.fields }
      : processes.find(process => process.title === title);

    this.setState({
      process: process
    });
  }

  componentDidMount() {
    if (!status) {
      processPortfolioLines();
    }
    cornerLines();
  }

  render() {
    const { process } = this.state;
    return (
      <main className="component process_component">
        <h1 className="page_title">Process</h1>
        <section className="inner" style={{ paddingBottom: "100px" }}>
          <ProcessCard process={process} />
        </section>
      </main>
    );
  }
}
