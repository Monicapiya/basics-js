const numArray = [1, 2, 3, 4, 5];
const reduced = numArray.reduce((acc, curr) => acc + curr, 0);
console.log(reduced);
// Output: 15


const cart = [
  {
    id: 1,
    name: 'Desk',
    qty: 6,
    cost: 600,
  },
  {
    id: 2,
    name: 'Water',
    qty: 2,
    cost: 60,
  },
  {
    id: 3,
    name: 'Laptop',
    qty: 5,
    cost: 500,
  },
  {
    id: 4,
    name: 'Mouse',
    qty: 6,
    cost: 60,
  },
];

const totalCost = cart.reduce((acc, curr) => acc + curr.qty * curr.cost, 0);
const totalQty = cart.reduce((acc, curr) => acc + curr.qty, 0);
console.log(`Total cost is ${totalCost} for ${totalQty} items`);

/*
Output:

'Total cost is 6580 for 19 items'

*/


const perfumes = [
  {
    id: 1,
    brand: 'Fruity by Kiwi 50ml',
    cost: 300,
    stock: 10,
  },
  {
    id: 2,
    brand: 'Silly Smelly',
    cost: 575,
    stock: 12,
  },
  {
    id: 3,
    brand: 'Ocean Mist by Ventuo',
    cost: 1243,
    stock: 5,
  },
  {
    id: 4,
    brand: 'Spotlight',
    cost: 991,
    stock: 8,
  },
  {
    id: 5,
    brand: 'Horrendous by Britney',
    cost: 230,
    stock: 2,
  },
];

const totalInStock = perfumes.reduce((prev, curr) => prev + curr.stock, 0);

const totalWorth = perfumes.reduce(
  (prev, curr) => prev + curr.cost * curr.stock,
  0
);

console.log(`Total items in stock: ${totalInStock}`);
console.log(`Total stock worth: $${totalWorth}`);

/*
Output:

'Total items in stock: 37'
'Total stock worth: $24503'

*/

const arrA = [1, 2, 3, 4, 5, 6, 7, { id: 1}, { id: 2}, 'Hello'];
const arrB = [1, 2, 3, 4, 5, 6, 7, { id: 1}, { id: 2}, 'Hello'];

const isIdentical = (arrA, arrB) => JSON.stringify(arrA) === JSON.stringify(arrB);

console.log(`Array A ${isIdentical(arrA,arrB ) ? 'is' : 'is not'} equal to Array B`);

// Output: 'Array A is equal to Array B'

const shoppingList = ['Apples', 'Milk', 'Pasta', 'Cheese Cubes', 'Coke Zero'];
const itemsBought = ['Cheese Cubes', 'Pasta', 'Milk', 'Coke Zero', 'Apples'];



const hasSameContents = (arrA, arrB) => {
    const stringA = arrA.map((el) => JSON.stringify(el));
    const stringB = arrB.map((el) => JSON.stringify(el));
   
    return [
      arrA.length === arrB.length,
      ...stringA.map((el) => stringB.includes(el)),
      ...stringB.map((el) => stringA.includes(el)),
    ].every((el) => el);
  };
  
  
  

console.log(
  hasSameContents(shoppingList, itemsBought)
    ? 'All items bought'
    : 'Items missing...'
);

/*
Output:

All items bought

*/