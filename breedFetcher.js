const request = require('request');
const breedName = process.argv.slice(2);
const url = `https://a.thecatapi.com/v1/breeds/sh?${breedName}`;

request(url, (error, response, body) => {
  if (error) {
    console.log(`${error}: Url error`);
    return;
  }
  if (body.length <= 2) {
    console.log(body.length);
    return;
  }
  const data = JSON.parse(body);
  console.log(data[0]['description']);
});

