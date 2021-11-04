const request = require('request');


const fetchBreedDescription = function(breed, callback){
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`
  request(url ,  (error, response, body) => {
    if (error) {
      console.log(`${error}: Url error`);
      return callback(error, null);
    }
    const data = JSON.parse(body);
    if (body.length <= 2) {
      return callback(`breed Not Found`, null);
    }
    return callback(null, data[0]['description']);
    }
  )};



module.exports = {fetchBreedDescription};


