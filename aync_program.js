//delay 1 second (1000ms)

function funcOne() {
  return "Hi from Num 1";
}

function funcTwo(cd) {
  setTimeout(function () {
    cd("Hi from Num 2");
  }, 2000);
}

function funcThree() {
  return "Hi from Num 3";
}

console.log(funcOne());
funcTwo((out) => console.log(out));
console.log(funcThree());

/*
Output:

Hi from Num 1'
'Hi from Num 3'
'Hi from Num 2' // delay in 2 seconds

*/

// promises

function getUsers() {
  return [
    { username: "Pia", email: "Pia@gmail.com" },
    { username: "Mahi", email: "Mahi@gmail.com" },
  ];
}

function findUser(username) {
  const users = getUsers();
  const user = users.find((user) => user.username === username);
  return user;
}

console.log(findUser("Pia"));

/*
{ username: 'Pia', email: 'Pia@gmail.com' }

*/

function getUsers(callback) {
  setTimeout(() => {
    callback([
      { username: "Pia", email: "Pia@gmail.com" },
      { username: "Mahi", email: "Mahi@gmail.com" },
    ]);
  }, 1000);
}

function findUser(username, callback) {
  getUsers((users) => {
    const user = users.find((user) => user.username === username);
    callback(user);
  });
}

findUser("Mahi", console.log);

/*
Output:

{ username: 'Mahi', email: 'Mahi@gmail.com' }

*/

/*
const promise = new Promise((resolve, reject) => {
  // contain an operation
  // ...

  // return the state
  if (success) {
    resolve(value);
  } else {
    reject(error);
  }
});

*/

const withCallback = (cb) => setTimeout(cb, 0);
withCallback(() => console.log("executed using an async callback"));

const withPromises = () => Promise.resolve("executed using promises");
withPromises().then((res) => console.log(res));

/*
'executed using promises'
Promise { undefined }
'executed using an async callback'

*/

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 3 * 100);
});

console.log(p);

/*
Output:

Promise {<pending>}
[[Prototype]]
: 
Promise
[[PromiseState]]
: 
"fulfilled"
[[PromiseResult]]
: 
10

*/

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 3 * 1000);
});

console.log(p);

p.then((result) => {
  console.log(result);
  return result * 2;
}).then((result) => {
  console.log(result);
  return result * 3;
});

/*
Promise { <pending> }
Promise { <pending> }
10
20

*/

// return a new promise in the then() method 👇

let p = new Promise((resolve, reject) => {
  setTimeout (() => {
  resolve(10);
  }, 3 * 100);
  }
  );
  
  
  p.then((result) => {
  console.log(result);
  return new Promise((resolve, reject) => {
  setTimeout (() => {
  resolve(10);
  }, 3 * 100);
  }
  );
  }) .then((result) => {
      console.log(result);
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve(result * 3);
          }, 3 * 1000);
      });
  }).then(result => console.log(result));
  
/*
Output:
Promise { <pending> }
10
10
30
*/


