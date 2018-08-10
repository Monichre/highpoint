import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AppStore from './flux/stores'
import GalleryPage from './pages/gallery'
import ProcessPage from './pages/process'
import Process from './components/process'
import PortfolioPage from './pages/portfolio'
import HomePage from './pages/home'
import { Transition, config, animated } from 'react-spring'

const routeWithComponents = [
  {
    path: '/',
    exact: true,
    component: HomePage
  },
  {
    path: '/portfolio',
    exact: true,
    component: PortfolioPage
  },
  {
    path: '/process',
    exact: true,
    component: ProcessPage
  },
  {
    path: '/process/:title',
    exact: true,
    component: Process
  },
  {
    path: '/gallery',
    exact: true,
    component: GalleryPage
  }
]

const { data } = AppStore

export default (
  <Transition
    native
    config={{ tension: 1, friction: 10 }}
    keys={window.location.pathname.split('/').filter(a => a)[0]}
    from={{ transform: 'translateY(100%)', opacity: .25 }}
    enter={{ transform: 'translateY(0%)', opacity: 1 }}
    leave={{ transform: 'translateY(-100%)', opacity: .25 }}>
    {style => (
      <Switch>
        {routeWithComponents.map((route, i) => (
          <Route
            exact={route.exact}
            key={'route-' + i}
            path={route.path}
            render={({ location }, props) => <route.component key={i} {...data} {...props} />}
          />
        ))}
      </Switch>
    )}
  </Transition>
)
