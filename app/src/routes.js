import React from 'react'
import AppStore from './flux/stores'
import GalleryPage from './pages/gallery'
import ProcessPage from './pages/process'
import Process from './components/process'
import PortfolioPage from './pages/portfolio'
import LeftNav from './components/leftNav'
import RightNav from './components/rightNav'
import HomePage from './pages/home'

export const routeWithComponents = [
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
