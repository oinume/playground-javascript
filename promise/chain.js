const fetch = require('node-fetch');

const args = process.argv.slice(2);
console.log(args);

const url = process.argv[2] || "https://httpbin.org/get";
fetch(url)
  .then(res => {
    console.log(`--- status:${res.status} ---`);
    return res.text()
  })
  .then(text => {
    console.log(text);
  })
  .catch(error => {
    console.log(error);
  });
