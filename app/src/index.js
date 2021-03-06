import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

if (process.env.NODE_ENV !== 'production') {
  const { registerObserver } = require('react-perf-devtool')

  registerObserver((measures) => {
    console.log(measures)
  })
}

ReactDOM.render(
  <App />, document.getElementById('root')
)
registerServiceWorker()
