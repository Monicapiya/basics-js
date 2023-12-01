for (let rep = 1; rep<=10; rep++){
  console.log( `Lifting weights repetition ${rep}`);
}

const joeArray = [
  'Joe',
  'Narnia',
  2037 - 1992,
  'teacher',
  ['Jaine', 'Pete', 'Kam'],
  true
];

const types = [];

for(let i = 0; i < joeArray.length; i++) {
  console.log(joeArray[i], typeof joeArray[i]);

  //filling up arrays
  // types[i] = typeof joeArray[i];
  types.push(typeof joeArray[i]);
}

console.log(types);

const years = [1990, 1991, 1992, 1993,1994];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break statement

console.log('---ONLY STRINGS---');
for(let i = 0; i < joeArray.length; i++) {
  if(typeof joeArray[i] !== 'string') continue;

  console.log(joeArray[i] , typeof joeArray[i] );
}

//Break statement

console.log('---ONLY Numbers---');
for(let i = 0; i < joeArray.length; i++) {
  if(typeof joeArray[i] === 'number') break;

  console.log(joeArray[i] , typeof joeArray[i] );
}


const joe = [
  'Joe',
  'Narnia',
  2037 - 1992,
  'teacher',
  ['Jaine', 'Pete', 'Kam'],
  true
];

for (let i = joe.length - 1; i>= 0; i--){
  console.log(i, joe[i]);
}

for(let exercise = 1; exercise < 4; exercise++){
  console.log(`----Starting exercise${exercise}`);
}

for(let rep = 1; rep < 6; rep++){
  console.log(`Exercise ${exercise}: Lifiting weight reptetation ${rep}`);
}

// while loop 👇

let rep = 1;

while (rep <= 10) {
  rep++;
}
console.log(`While: lifting wegihts repetition ${rep} `);

let dice = Math.trunc(Math.random() * 6) + 1;

while(dice !== 6){
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if(dice === 6) 
  console.log('Loop is about to end....');
}

/*
  et's improve Steven's tip calculator even more, this time using loops!

Your tasks:

Create an array called bills containing all 10 test bill values.

Create empty arrays for the tips and the totals (tips and totals)

Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

Call the function with the totals array


*/

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [
    34, 45, 90, 120, 230, 340, 560, 790, 1020, 1500];
    const tips = [];
    const totals =[];

    for(let i = 0; i < bills.length; i++ ) {
      const tip = calcTip(bills[i]);
      tips.push(tip);
      totals.push(tip + bills[i]);
    }

    console.log(bills, tips, totals);


    const calcAverage = function(arr) {
      let sum = 0;
      for(let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
      }
      return sum / arr.length;
    }

    // console.log(sum);
    console.log(calcAverage([2, 3, 6]));
    console.log(calcAverage(totals));
    console.log(calcAverage(tips));
