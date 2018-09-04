import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppStore from './flux/stores'
import AppDispatcher from './flux/dispatchers'
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

    this.getStore()
    
  }

  _onChange() {
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
    const {removeLoader} = this.state
    const {data} = AppStore
    const ready =  AppStore.data.ready 

    if (removeLoader || ready) {
      const {properties} = AppStore.data
      return (
        <BrowserRouter {...data}>
           <div className="App">
            <LeftNav location={location} />
            {routes}
            <RightNav location={location} properties={properties} />
        </div>
        </BrowserRouter>
     
    )
    } else {
      this.getStore()
      return <Loader endLoader={this.removeLoader}/>
    }
   
  }
}

export default App
