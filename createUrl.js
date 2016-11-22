var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27018/url-short'

// this function expects sanitized link to be passed in

function create(ref, callback){
  if(!ref) throw err

  //create 4 digit random number sequence
  var numbers = "numb".split('').map(() => {
    return Math.random(0,9).toFixed(1)*10
  }).join('')

  // create entry to insert
  var doc = {
    addr: ref,
    query: numbers.toString()
  }

  mongo.connect(url, (err, db) => {
    if(err) throw err

    db.collection('redirect').insert(
      doc
    , function(err, data){
      callback(err,data)
    })
    db.close()
  })
}

// create('hhtp')
module.exports = create
