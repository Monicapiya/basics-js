
/*
Exercise 1: Loop Basics
Question: Write a loop that prints numbers from 1 to 10.
Input/Output: No input. Output should be numbers from 1 to 10, each on a new line.


*/

for(let i = 1; i <= 10; i++){
  console.log(i);
};



/*
Exercise 2: Sum of Numbers
Question: Use a loop to calculate the sum of numbers from 1 to n, where n is provided as input.
Input/Output: Input: n (e.g., 5). Output: Sum of numbers from 1 to n.


*/

function nums(n) {
  let result = 0;
  for(let i = 1; i<=n; i++ ) {
    result+= i;
  }

  return  result;
};

console.log(nums(5));


/*

Exercise 3: Counting Backwards
Question: Write a loop that counts backwards from 10 to 1.
Input/Output: No input. Output should be numbers from 10 to 1, each on a new line.


*/

const numsCount = [1,2,3,4,5,6,7,8,9,10];
const output = numsCount.reverse();
console.log(output);


/*

Exercise 4: Even Numbers
Question: Display all even numbers between 1 and 20 using a loop.
Input/Output: No input. Output should be even numbers between 1 and 20.


*/

for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}



/*

Exercise 5: Multiplication Table
Question: Generate a multiplication table for a number n.
Input/Output: Input: n (e.g., 3). Output: Multiplication table of n.


*/

for (let i = 3; i <= 30; i += 3) {
  console.log(i);
}

function numsMultiTable(numsCal) {
  for (let i = 1; i <= 10; i++) {
    const result = numsCal * i;
    const output = `${numsCal} x ${i} = ${result}`
    console.log(output);
  }
}

numsMultiTable(3);



/*

Exercise 6: Factorial Calculation
Question: Calculate the factorial of a number n.
Input/Output: Input: n (e.g., 5). Output: Factorial of n.



*/

function factCal(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factCal(number - 1);
  }
}
console.log(factCal(5));

/*

Exercise 7: Array Iteration
Question: Iterate over an array and print each element.
Input/Output: Input: An array (e.g., [1, 2, 3, 4, 5]). Output: Elements of the array.


*/

const numsCopy = [1, 2, 3, 4, 5];
for (let i = 0; i < numsCopy.length; i++) {
  console.log(numsCopy[i]);
}


/*

Exercise 8: Find the Largest Number
Question: Find the largest number in an array.
Input/Output: Input: An array of numbers. Output: The largest number in the array.


*/

console.log(Math.max(2,3,4,5,6,7));




/*

Exercise 9: String Reversal
Question: Reverse a string using a loop.
Input/Output: Input: A string (e.g., “hello”). Output: Reversed string.



*/


const words = 'Hello';
const reverseword = words.split('').reverse().join('');

console.log(reverseword);



/*

Exercise 10: FizzBuzz
Question: For each number from 1 to n, print “Fizz” if the number is divisible by 3, “Buzz” if it’s divisible by 5, “FizzBuzz” if it’s divisible by both 3 and 5, or the number itself if none of these conditions are true.
Input/Output: Input: n (e.g., 15). Output: “Fizz”, “Buzz”, “FizzBuzz”, or the number, according to the rules.



*/


function fizzBuzz1(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz1(15)

