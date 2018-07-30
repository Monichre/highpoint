import React, { Component } from 'react'
import AppStore from './flux/stores'
import AppDispatcher from './flux/dispatchers'
import CircularNav from './components/circularNav'
import { Header } from './components/header'
import LeftNav from './components/leftNav'
import RightNav from './components/rightNav'
import routes from './routes'

import './App.scss'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
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
    this.setState(AppStore)
  }
  render() {
    const location = window.location 
    const {ready} = AppStore.data 
    if (ready) {
      return (
        <div className="App">
        <Header location={location} />
          <LeftNav />
          {routes}
          <RightNav location={location} />
        </div>
    )
    } else {
      this.getStore()
      return <div>LOADING</div>
    }
   
  }
}

export default App
