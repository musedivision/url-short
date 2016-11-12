var express = require('express');
var app = express()

var port = process.env.PORT || 8080

// instructions
app.get('/', function(req,res){
  res.send("Katherine is better than trump")
})

// new url path
app.get('/new/*', function (req,res) {
  console.log(req.params[0])
  res.send("URL shortener: " + req.params[0])
})

app.listen(port, function(){
  console.log("Express server started on port: ", port)
})
