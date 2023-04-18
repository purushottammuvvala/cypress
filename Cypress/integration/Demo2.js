//promise example

let promise = new Promise((resolve, reject) => {
  let a = 1 + 3;
  if (a == 2) {
    resolve("promise is fullfiled");
  } else {
    reject("promise not fullfiled");
  }
});
promise
  .then((message) => {
    console.log(`${message} promise has passed`);
  })
  .catch((message) => {
    console.log(`${message} promise has failed`);
  });
