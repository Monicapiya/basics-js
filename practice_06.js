/*
Write a JavaScript function that reverses a number.
Example x = 32243;
Expected Output : 34223

*/

// 1
let nums = 32243;
let result = nums.toString().split('').reverse().join('');
console.log(result);

// 2

let num = [3,4,5,6,7];
let result = num.reverse();
console.log(result);

// 3

function revNum(number){
  number = number + '';
  return number.split('').reverse().join('');
}
console.log(revNum(12345));