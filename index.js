const {fetchBreedDescription} = require('./breedFetcher');//imports the function

const breedName = process.argv.slice(2)[0]; //reads the input from the command line


fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});

