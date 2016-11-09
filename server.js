var express = require('express');
var app = express()

var port = process.env.PORT || 8080

app.get('/', function(req,res){
  res.send("Katherine is better than trump")
})

app.listen(port, function(){
  console.log("Express server started on port: ", port)
})
