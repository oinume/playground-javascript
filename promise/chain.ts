const args = process.argv.slice(2);
console.log(args);

const url = process.argv[2] || "https://httpbin.org/get";
fetch(url)
  .then((res: Response) => {
    console.log(`--- status:${res.status} ---`);
    return res.text()
  })
  .then((text: string) => {
    console.log(text);
  })
  .catch((error: Error) => {
    console.log(error.message);
  });
