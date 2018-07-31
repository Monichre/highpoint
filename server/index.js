const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
// const compression = require('compression')
const app = express()

app.set('port', process.env.PORT || 3001)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Cache-Control', 'no-cache')
  next()
})
// app.use(compression())

app.use(express.static(path.resolve(__dirname, '../app/build')))
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../app/build', 'index.html'))
})

app.listen(app.get('port'), () => {
  console.log("Highpoint is running yall")
})