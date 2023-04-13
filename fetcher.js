const arg = process.argv.slice(2);
const url = arg[0];
const localFilePath = arg[1];

const request = require('request');
const fs = require('fs');

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  else {
    fs.writeFile(localFilePath, body, (error) => {
      if (error) {
        console.log(error);
        return;
      } else {
        console.log(`Dowloaded ans saved ${body.length} to ${localFilePath} `);
      }
    });
  }
});