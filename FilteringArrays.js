/*
The filter() method finds and returns all elements as matched successfully by a testing function 

it returns a new array 


*/

const numArray = [789, 564, 345, 23, 67, 990, 5, 888];

const evenNums = numArray.filter((elem) => elem % 2 === 0);

const oddNums = numArray.filter((elem) => elem % 2 !== 0);

console.log(`Even : ${evenNums}`);
console.log(`Odd : ${oddNums}`);

/*
Output:

'Even : 564,990,888'
'Odd : 789,345,23,67,5'

*/

const employees = [
  {
    id: 1,
    name: 'John Smith',
    age: 35,
  },
  {
    id: 2,
    name: 'Roger McShane',
    age: 45,
  },
  {
    id: 3,
    name: 'Dolly McShane',
    age: 20,
  },
  {
    id: 4,
    name: 'Joan Mockery',
    age: 25,
  },
];

const findEmployees = ([prop, val], arr) => arr.filter((elem) => elem[prop] === val);

console.log(findEmployees(['age', 45], employees));

/*
Output:

[ { id: 2, name: 'Roger McShane', age: 45 } ]

*/

const products = [
  {
    id: 1,
    name: 'Laptop',
    isAvailable: true,
  },
  {
    id: 2,
    name: 'Mouse',
    isAvailable: false,
  },
  {
    id: 3,
    name: 'KeyBoard',
    isAvailable: true,
  },
  {
    id: 4,
    name: 'Oil',
    isAvailable: false,
  },
];


const isAvailable = products.filter((elem) => elem.isAvailable);
const notAvailable = products.filter((elem) => !elem.isAvailable);

console.log(isAvailable);
console.log(notAvailable);

/*
Output:

[
  { id: 1, name: 'Laptop', isAvailable: true },
  { id: 3, name: 'KeyBoard', isAvailable: true }
]
[
  { id: 2, name: 'Mouse', isAvailable: false },
  { id: 4, name: 'Oil', isAvailable: false }
]

*/

const users = [
  {
    name: 'John M',
    isVerified: true,
  },
  {
    name: 'Jane S',
    isVerified: false,
  },
  {
    name: 'Wanda M',
    isVerified: true,
  },
  {
    name: 'Tony S',
    isVerified: false,
  },
  {
    name: 'Emilio Q',
    isVerified: true,
  },
  {
    name: 'Jonathan W',
    isVerified: false,
  },
];

const isVerified = users.filter(({isVerified}) => isVerified).map(({name}) => name);
const notVerified = users.filter(({isVerified}) => !isVerified).map(({name}) => name);

console.log(`Verified: ${isVerified}`);
console.log(`Not Verified: ${notVerified}`);

/*
Output:

'Verified: John M,Wanda M,Emilio Q'
'Not Verified: Jane S,Tony S,Jonathan W'


*/