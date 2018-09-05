import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import AppStore from './flux/stores'
import GalleryPage from './pages/gallery'
import ProcessPage from './pages/process'
import Process from './components/process'
import PortfolioPage from './pages/portfolio'
import LeftNav from './components/leftNav'
import RightNav from './components/rightNav'
import HomePage from './pages/home'

const routeWithComponents = [
  {
    path: '/',
    exact: true,
    component: HomePage,
    leftNav: () => LeftNav,
    rightNav: () => RightNav
  },
  {
    path: '/portfolio',
    exact: true,
    component: PortfolioPage,
    leftNav: () => LeftNav,
    rightNav: () => RightNav
  },
  {
    path: '/process',
    exact: true,
    component: ProcessPage,
    leftNav: () => LeftNav,
    rightNav: () => RightNav
  },
  {
    path: '/process/:title',
    // exact: true,
    component: Process,
    leftNav: () => LeftNav,
    rightNav: () => RightNav
  },
  {
    path: '/gallery',
    // exact: true,
    component: GalleryPage,
    leftNav: () => LeftNav,
    rightNav: () => RightNav
  }
]

const { data } = AppStore

export const componentRoutes = (
  routeWithComponents.map((route, i) => (
    <Route
      // exact={route.exact}
      key={'route-' + i}
      path={route.path}
      render={props =>
        <route.component key={i} {...data} {...props} />
      }
    />
  ))
)

export const leftNavRoutes = (
  routeWithComponents.map((route, i) => (
    <Route
      // exact={route.exact}
      key={'route-' + i}
      path={route.path}
      render={props =>
        <route.leftNav key={`leftNav_${i}`} {...data} {...props} />
      }
    />
  ))
)

export const rightNavRoutes = (
  routeWithComponents.map((route, i) => (
    <Route
      // exact={route.exact}
      key={'route-' + i}
      path={route.path}
      render={props =>
        <route.rightNav key={`rightNav_${i}`} {...data} {...props} />
      }
    />
  ))
)
