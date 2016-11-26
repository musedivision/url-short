var express = require('express')
var router = express.Router()

var checkUrl = require('../checkUrl');
var createUrl = require('../createUrl');


//  /new/ create a new URL and store in database
router.post('/new/*', function (req,res) {
  var url = req.params[0]
  if(checkUrl(url)) {
    // create new data base entry and return the new url etc
    createUrl(url, function(err,docs){
      var tinyUrl = docs.ops[0].query
      res.send({"original_url":url,"short_url": `https://so-short-so-url.herokuapp.com/${tinyUrl}` })
    })
  } else {
    res.send({"error": "Please provide URL in the correct format, see http://www.w3schools.com/html/html_urlencode.asp for help"})
  }
})

module.exports = router
