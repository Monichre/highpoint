import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import AppStore from "./flux/stores";
import AppDispatcher from "./flux/dispatchers";
import Loader from "./components/loader";
import { componentRoutes, leftNavRoutes, rightNavRoutes } from "./routes";
import { BROWSER } from "./utils/browser";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      removeLoader: false
    };
  }

  componentDidMount() {
    BROWSER.listenForResize();
    AppStore.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange.bind(this));
  }

  getStore() {
    AppDispatcher.dispatch({
      action: "get-app-store"
    });
  }
  componentWillMount() {
    this.getStore();
  }

  _onChange() {
    this.setState({ ...AppStore.data });
  }

  removeLoader = siteIsReady => {
    if (siteIsReady) {
      this.setState({
        removeLoader: true
      });
    }
  };

  render() {
    const { removeLoader } = this.state;
    const { data } = AppStore;
    const ready = AppStore.data.ready;

    if (removeLoader || ready) {
      return (
        <BrowserRouter {...data}>
          <div className="App">
            {componentRoutes}
            {leftNavRoutes}
            {rightNavRoutes}
          </div>
        </BrowserRouter>
      );
    } else {
      this.getStore();
      return <Loader endLoader={this.removeLoader} />;
    }
  }
}

export default App;
