async function sayHi() {
  return Promise.resolve("Hi");
}

sayHi().then(console.log);

/*
Output:

Promise { <pending> }
'Hi'

*/

async function display() {
  let result = await sayHi();
  console.log(result);
}

display();

/*
Output:

Promise { <pending> }
'Hi'

*/

function getUser(userId) {
  return new Promise((resolve, reject) => {
    console.log("Get user from database");
    setTimeout(() => {
      resolve({
        userId: userId,
        username: "john",
      });
    }, 1000);
  });
}

function getServices(user) {
  return new Promise((resolve, reject) => {
    console.log(`Get services of ${user.username} from the API`);
    setTimeout(() => {
      resolve(["Email", "VPN", "CDN"]);
    }, 2 * 200);
  });
}

function getServiceCost(services) {
  return new Promise((resolve, reject) => {
    console.log(`Calculate services cost ${services}`);
    setTimeout(() => {
      resolve(services.length * 100);
    }, 3 * 1000);
  });
}

/*getUser(100)
  .then(getServices)
  .then(getServiceCost)
  .then(console.log)
*/

async function showServiceCost() {
  let user = await getUser(100);
  let services = await getServices(user);
  let cost = await getServiceCost(services);
  console.log(`The service cost is ${cost}`);
}

showServiceCost();

/*
Output:

'Get user from database'
Promise { <pending> }
'Get services of john from the API'
'Calculate services cost Email,VPN,CDN'
300

*/

/*
Output:

'Get user from database'
Promise { <pending> }
'Get services of john from the API'
'Calculate services cost Email,VPN,CDN'
'The service cost is 300'

*/

// Error handling

async function getUser(userId) {
  await Promise.reject(new Error("Invalid User Id"));
}

getUser();

/*
Output:

Promise { <rejected> Error: 'Invalid User Id' }
Uncaught (in promise) Error: Invalid User Id

*/

// try...catch

async function getUser(userId) {
  try {
    const user = await Promise.reject(new Error("Invalid user"));
  } catch (error) {
    console.log(error);
  }
}

getUser().then(console.log);
/*
Output:

Error: 'Invalid user'
Promise { <pending> }
undefined

*/
