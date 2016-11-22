var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27018/url-short'

// requires callback to use the find output

function find(num, callback){
  if(!num) throw err

  var tiny

  mongo.connect(url, function(err, db){
    if(err) throw err


    db.collection('redirect').find(
      { query: num }
    , function(err, cursor){
      cursor.toArray(callback)
    })
    db.close()
  })
}

module.exports = find
