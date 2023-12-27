/*
The sort method sorts and mutates the data in the original array

The sort method converts elements to strings and compares their Unicode (UTF - 16) code unit values.

The sort is a mutator method modifies the original array rather than returning the new Array


*/

const numArray = [789, 564, 345, 23, 67, 990, 5];
const asc = [...numArray].sort((a, b) => a - b);
const desc = [...numArray].sort((a, b) => b - a);
console.log(`Ascending: ${asc}`);
console.log(`Dscending: ${desc}`);

/*
Output:

'Ascending: 5,23,67,345,564,789,990'
'Dscending: 990,789,564,345,67,23,5'

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

const displayList = (arr, sortFn) => sortFn([...arr]).forEach((elem) => 
console.log(`${elem.name} | ${elem.age} years old`)
);



const byAgeAsc = (arr) => arr.sort((a,b) => a.age - b.age);
const byAgeDesc = (arr) => arr.sort((a,b) => b.age - a.age);
const byNameAsc = (arr) => arr.sort((a,b) => (a.name < b.name ? -1 : a.name > b.name ? 1: 0));

const byNameDesc = (arr) => arr.sort((a,b) => (a.name < b.name ? 1 : a.name > b.name ? -1: 0));

displayList(employees, byNameDesc);

/*
Output:

'Roger McShane | 45 years old'
'John Smith | 35 years old'
'Joan Mockery | 25 years old'
'Dolly McShane | 20 years old'

*/

const perfumes = [
  {
    id: 1,
    brand: 'Fruity by Kiwi 50ml',
    cost: 300,
  },
  {
    id: 2,
    brand: 'Silly Smelly',
    cost: 575,
  },
  {
    id: 3,
    brand: 'Ocean Mist by Ventuo',
    cost: 1243,
  },
  {
    id: 4,
    brand: 'Spotlight',
    cost: 991,
  },
  {
    id: 5,
    brand: 'Horrendous by Britney',
    cost: 230,
  },
];

const mostExpensive = [...perfumes].sort((a, b) => b.cost - a.cost)[0];

const cheapest = [...perfumes].sort((a, b) => a.cost - b.cost)[0];

console.log(`Most Expensive: ${mostExpensive.brand} at $${mostExpensive.cost}`);
console.log(`Cheapest: ${cheapest.brand} at $${cheapest.cost}`);

/*
Output:

'Most Expensive: Ocean Mist by Ventuo at $1243'
'Cheapest: Horrendous by Britney at $230'

*/