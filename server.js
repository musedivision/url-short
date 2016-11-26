var express = require('express');
var app = express()

// utility functions
var checkUrl = require('./checkUrl');
var createUrl = require('./createUrl');
var fetchUrl = require('./fetchUrl');

var port = process.env.PORT || 8080


// home - instructions page
// set the view engine
app.set('view engine', 'jade')
app.set('views', (__dirname + '/views'))
app.get('/',function(req,res){
  res.render('index')
})

// routes
var postURL = require('./routes/new')
var getRedirect = require('./routes/redirect')

app.use(postURL)
app.use(getRedirect)


// start http server
app.listen(port, function(){
  console.log("Express server started on port: ", port)
})
