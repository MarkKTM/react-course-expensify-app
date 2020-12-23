const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Bill',
      weight: 170
    });
    reject('Something went wrong!');
  }, 3000);  
});

console.log('Before');

// Promise Chaining
promise.then((data) => {
  console.log('1', data);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('This is my promise');
      reject('Something went wrong!');
    }, 3000);  
  });
}).then((str) => {
  console.log('does this run?', str);
}).catch((error) => {
  console.log('error: ', error);
});

console.log('After');