var express = require('express')
var router = express.Router()

var fetchUrl = require('../fetchUrl');

// fetch redirect - URI from database then redirect
router.get('/*', function(req, res) {
  fetchUrl(req.params[0], function(err, docs){
    var re = docs

    if(re.length > 0){
      res.redirect(re[0].addr)
    } else {
      res.send({"error": "This url is not in the database"})
    }
  })
})

module.exports = router
