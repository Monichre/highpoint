import React, { Component } from 'react'
import AppStore from './flux/stores'
import AppDispatcher from './flux/dispatchers'
import CircularNav from './components/circularNav'
import Footer from './components/footer'
import { Header } from './components/header'
import LeftNav from './components/leftNav'
import RightNav from './components/rightNav'
import routes from './routes'
import Loader from './components/loader'
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
    // const appCache = localStorage.getItem('appCache')
    // console.log(appCache)
    // if(appCache) {
    //   this.setState({appCache})
    //   return
    // } else {
    //   this.getStore()
    // }
    this.getStore()
    
  }

  _onChange() {
    // const appCache = localStorage.getItem('appCache')
    // console.log(appCache)
    // if(appCache) {
    //   this.setState({appCache})
    //   return
    // } else {
    //   this.getStore()
    // }
    this.setState({...AppStore.data})
  }

  removeLoader = (siteIsReady) => {
    if(siteIsReady) {
      this.setState({
        removeLoader: true
      })
    }
  }

  render() {
    const location = window.location 
    const conditionalFooter = location.pathname !== '/' ? null : <Footer /> 
    const {removeLoader} = this.state
    const appCache = localStorage.getItem('appCache')
    const ready =  AppStore.data.ready 

    if (removeLoader || ready) {
      return (
        <div className="App">
        <Header location={location} />
          <LeftNav />
          {routes}
          <RightNav location={location} />
          {conditionalFooter}
        </div>
    )
    } else {
      this.getStore()
      return <Loader endLoader={this.removeLoader}/>
    }
   
  }
}

export default App
