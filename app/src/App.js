import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import AppStore from './flux/stores'
import AppDispatcher from './flux/dispatchers'
import Loader from './components/loader'
import {routeWithComponents} from './routes'
import './App.scss'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      removeLoader: false
    }
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onChange.bind(this))
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange.bind(this))
  }

  getStore() {
    AppDispatcher.dispatch({
      action: 'get-app-store'
    })
  }
  componentWillMount() {
    this.getStore()
  }

  _onChange() {
    this.setState({ ...AppStore.data })
  }

  removeLoader = siteIsReady => {
    if (siteIsReady) {
      this.setState({
        removeLoader: true
      })
    }
  }

  render() {
    const { removeLoader } = this.state
    const { data } = AppStore
    const ready = AppStore.data.ready

    if (removeLoader || ready) {
      return (
        <BrowserRouter {...data}>
            <div className="App">
              {componentRoutes}
              {leftNavRoutes}
              {rightNavRoutes}
            </div>
        </BrowserRouter>
      )
    } else {
      this.getStore()
      return <Loader endLoader={this.removeLoader} />
    }
  }
}

export default App

const { data } = AppStore
const componentRoutes = routeWithComponents.map((route, i) => (
  <Route
    exact={route.exact}
    key={'route-' + i}
    path={route.path}
    render={props => <route.component key={i} {...data} {...props} />}
  />
))

const leftNavRoutes = routeWithComponents.map((route, i) => (
  <Route
    exact={route.exact}
    key={'route-' + i}
    path={route.path}
    render={props => <route.leftNav key={`leftNav_${i}`} {...data} {...props} />}
  />
))

const rightNavRoutes = routeWithComponents.map((route, i) => (
  <Route
    exact={route.exact}
    key={'route-' + i}
    path={route.path}
    render={props => <route.rightNav key={`rightNav_${i}`} {...data} {...props} />}
  />
))