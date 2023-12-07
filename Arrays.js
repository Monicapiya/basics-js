const friends = ['Moe', 'Eea', 'Palam'];
console.log(friends);

//Another way of creating array 👇

const years = new Array(1290,2345,1345,2134);

console.log(friends[0])

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Pia';
console.log(friends);

const calcAge = function(birthYear) {
  return 2037 - birthYear;
}
const years1 = [1990,1998,1890,3255];

const age1 = calcAge(years1[0]);
const age2 = calcAge(years1[1]);
const age3 = calcAge(years1[years1.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years1[0]), calcAge(years1[1]),calcAge(years1[years1.length - 1])  ];

console.log(ages);

//methods of Array 👇

// push method 🌟

const friends1 = ['Moe', 'Eea', 'Palam'];
friends1.push('Kia'); // const newlength = friends1.push('Kia');
console.log(friends1);

// unshift method  🌟
friends1.unshift('Ian'); 
console.log(friends1);

// remove method  🌟


friends1.pop(); 
console.log(friends1);

// shift method  🌟
friends1.shift('Ian'); 
console.log(friends1);

// indexof  method  🌟

console.log(friends1.indexOf('Eea'));

// includes  method  🌟
console.log(friends1.includes('Eea'));

// reduce method

const arrayNum = [2, 3, 4, 9, 10];
const num = arrayNum.reduce((accumulator, currentValue) => {
return accumulator + currentValue; }, 0);

const Avg = num / arrayNum.length;

console.log(Avg);

// Array.map() method



if(friends.includes('Kia')){
  console.log('You have a friend called Kia');
} else {
  console.log('Sorry!! the person you are checking for is not in your friend list');
}


function calcTip(bill){
  // return bill >= 50 && bill <=300 ? bill * 15/100 : bill * 20/100;
  
  return bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.2;
}
const bills = [35, 290, 500];

const tip = [calcTip(bills[0]),calcTip(bills[1]), calcTip(bills[1]) ];

console.log(bills, tip);

const tip1 = `${[bills[0]]} + ${[calcTip(bills[0])]}`
const tip2 = `${[bills[1]]} + ${[calcTip(bills[1])]}`
const tip3 = `${[bills[2]]} + ${[calcTip(bills[2])]}`

const total = `${tip1} , ${tip2}, ${tip3}`



console.log(total);


/*

Create a function to calculate the factorial of a number using recursion. For instance, the factorial of 5 (denoted as 5!) is 120.

function factCal(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factCal(number - 1);
  }
}
console.log(factCal(5));


 In the context of the factorial problem, recursion is a programming technique where a function calls itself to solve a smaller subproblem until it reaches a base case. In this case, the base case is when the input number n is equal to 0 or 1.

Here's how the recursive factorial() function works:

When the factorial() function is called with an input number n, it first checks if n is equal to 0 or 1. If it is, the function immediately returns 1 since the factorial of 0 and 1 is 1.

If n is not 0 or 1, the function calculates the factorial by multiplying n with the result of calling the factorial() function recursively with n-1. This recursive call calculates the factorial of a smaller subproblem, which is n-1, and so on.

The recursion continues until the base case is reached, at which point the recursive calls start to unwind and the factorial values are multiplied together to obtain the final result.

For example, let's calculate the factorial of 5 using the factorialRecursive() function:

The initial call to factorial(5) is not a base case, so it goes to step 2.

The function calculates 5 * factorial(4) by making a recursive call with n-1.

Now, the recursive call factorial(4) is not a base case, so it goes to step 2 again.

The function calculates 4 * factorial(3) by making another recursive call with n-1.

This process continues until factorial(1) is reached, which is a base case and returns 1.

The recursion starts to unwind: factorial(1) returns 1, then factorial(2) multiplies it by 2, factorial(3) multiplies it by 3, factorial(4) multiplies it by 4, and finally, factorial(5) multiplies it by 5.

The final result is 5 * 4 * 3 * 2 * 1, which is 120.

Recursive functions can be a powerful technique for solving problems that can be divided into smaller subproblems. However, it's important to ensure that a proper base case is defined to avoid infinite recursion.

*/
 