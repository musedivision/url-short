var express = require('express');
var app = express()

//utils
var checkUrl = require('./checkUrl');
var createUrl = require('./createUrl');
var fetchUrl = require('./fetchUrl');

var port = process.env.PORT || 8080


// instructions
app.get('/', function(req,res){
  res.send("Katherine is better than trump")
})

// new url path
app.get('/new/*', function (req,res) {
  var url = req.params[0]
  var tinyUrl

  if(checkUrl(url)) {
    // create new data base entry and return the new url etc
    createUrl(url, function(err,docs){
      tinyUrl = docs.ops[0].query
      res.send({"original_url":url,"short_url": `https://little-url.herokuapp.com/${tinyUrl}` })
    })
  } else {
    res.send({"error": "Please provide URL in the correct format, see http://www.w3schools.com/html/html_urlencode.asp for help"})
  }
})

// fetch redirect - order of listeners matter?
app.get('/*', function(req, res) {
  var url = req.params[0]
  var re
  fetchUrl(req.params[0], function(err, docs){
    re = docs

    if(re.length > 0){
      res.redirect(re[0].addr)
    } else {
      res.send({"error": "This url is not in the database"})
    }
  })

})





app.listen(port, function(){
  console.log("Express server started on port: ", port)
})
