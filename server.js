var express = require('express')
var serveStatic = require('serve-static')

var app = express()
var port = process.env.PORT || 8080
app.use(serveStatic('dist', { 'index': ['index.html'] }))

app.get('/*', function(req, res){
  res.sendFile(__dirname + '/dist/index.html')
})

app.listen(port)