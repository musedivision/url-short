// checks regex of the URL to see if is in correct format
// just changed so it returned a boolean
var validUrl = require('valid-url');


function isCorrect(str){
  if(validUrl.isUri(str)){
    return true
  } else {
    return false
  }
}

module.exports = isCorrect
