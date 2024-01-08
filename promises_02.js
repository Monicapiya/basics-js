const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The 1st promise is resolved");
    resolve(10);
  }, 1 * 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The 2nd promise is resolved");
    resolve(20);
  }, 2 * 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The 3rd promise is resolved");
    resolve(30);
  }, 3 * 1000);
});

Promise.all([p1, p2, p3]).then((results) => {
  const total = results.reduce((p, c) => p + c);
  console.log(`Results : ${results}`);
  console.log(`Total: ${total}`);
});

/*
Output:

Promise { <pending> }
'The 1st promise is resolved'
'The 2nd promise is resolved'
'The 3rd promise is resolved'
'Results : 10,20,30'
'Total: 60'

*/
