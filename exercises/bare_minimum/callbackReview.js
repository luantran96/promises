/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  fs.readFile(filePath, (err, data) => {
    
    if (err) {
      callback(err, null);
    } else {      
      var dataText = data.toString().split('\n');
      callback(err, dataText[0]);
    }   
  });  
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request(url, (err, response, body) => {   
    if (!err) {      
     var statusCode = response.statusCode;   
      callback(err, response.statusCode);           
    } else {
      callback(err, null);
    }
  }); 
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
