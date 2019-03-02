const express = require('express'), 
    bodyParser = require('body-parser'),
    Router = require('./routes/router'),
    config = require('./config'),
    middleware = require('./utils/middleware')

const app = express(),
    server = require('http').createServer(app)

app.locals.pretty = true

app
  .use(express.static(`${__dirname}/public`))
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(middleware.cors)

// routes
Router(app)

server.listen(config.port)
console.log(`hello server started on port ${config.port}`)

exports.app = app