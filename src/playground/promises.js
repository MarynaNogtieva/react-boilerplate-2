const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is my resolved data');

    // reject('Something went wrong');
  }, 1500);
});

console.log('before');
promise.then((data) => {
  console.log('1', data);
});

promise.then((data) => {
  console.log('2', data);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('This is my OTHER resolved data');
    }, 1500);
  });  
}).then((str) => {
  console.log('does this run ', str);
}).catch((error) => {
  console.log('error: ', error);
});

// promise.then((data) => {
//   console.log('2', data);
// }, (error) => {
//   console.log('error: ', error);
// })

console.log('after');