import React, { Component, Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AppStore from './flux/stores'
import AppDispatcher from './flux/dispatchers'
import Loader from './components/loader'
import GalleryPage from './pages/gallery'
import ProcessPage from './pages/process'
import Process from './components/process'
import PortfolioPage from './pages/portfolio'
import LeftNav from './components/leftNav'
import RightNav from './components/rightNav'
import HomePage from './pages/home'
import './App.scss'

const routeWithComponents = [
  {
    path: '/',
    exact: true,
    component: HomePage,
    leftNav: LeftNav,
    rightNav: RightNav
  },
  {
    path: '/portfolio',
    // exact: true,
    component: PortfolioPage,
    leftNav: LeftNav,
    rightNav: RightNav
  },
  {
    path: '/process',
    exact: true,
    component: ProcessPage,
    leftNav: LeftNav,
    rightNav: RightNav
  },
  {
    path: '/process/:title',
    exact: true,
    component: Process,
    leftNav: LeftNav,
    rightNav: RightNav
  },
  {
    path: '/gallery',
    // exact: true,
    component: GalleryPage,
    leftNav: LeftNav,
    rightNav: RightNav
  }
]

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
          <Fragment>
            {/* <LeftNav />
            <RightNav /> */}
            <div className="App">
              {componentRoutes}
              {leftNavRoutes}
              {rightNavRoutes}
            </div>
          </Fragment>
        </BrowserRouter>
      )
    } else {
      this.getStore()
      return <Loader endLoader={this.removeLoader} />
    }
  }
}

export default App
