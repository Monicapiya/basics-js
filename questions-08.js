//  Write a function that finds the longest string in an array of strings. For example, ['short', 'longer', 'longest'] should return ////'longest'.

const data = ['short', 'longer', 'longest'];

function lengthOfData(array){
  let longString = '';
  for (let i = 0; i < array.length; i++){
    if(array[i].length > longString.length){
      longString = array[i];
    }
  }
  return longString;
};

console.log(lengthOfData(data));

//Create a function to calculate the factorial of a number using recursion. For instance, the factorial of 5 (denoted as 5!) is 120.

function factCal(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factCal(number - 1);
  }
}
console.log(factCal(5));


// Write a JavaScript function to find the smallest number in an array of numbers. For example, [2, 3, 1, 4] should return 1.

const numbers1 = [2,3,1,4];
const smallestNum = Math.min(...numbers1);
console.log(smallestNum);

/*
 Question 4
Prompt: Create a function that counts the number of elements in an array that are greater than 10. For instance, [3, 11, 20] should return 2.

*/

/* 
const numbers = [3,11,20];

function totalNum(){
  let greaterNum = [];
  for (let i = 0; i < numbers.length; i++){
    if (numbers[i] > numbers.length) {
      greaterNum.push(numbers[i]);
      
    }
  }
   return greaterNum;
};



console.log(totalNum(numbers));

*/

const numbers = [3,11,20];

function totalNum(){
  let greaterNum = [];
  for (let i = 0; i < numbers.length; i++){
    if (numbers[i] > numbers.length) {
        greaterNum++;
    }
  }
   return greaterNum;
};



console.log(totalNum(numbers));


/*
Question 1
Prompt: Write a JavaScript function that filters out strings from an array. For example, given ['hello', 5, 'world', 10], it should return [5, 10].


*/

const execuleWords = ['hello', 5, 'world', 10];
function onlyNumbers(words) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    if (typeof words[i] !== 'string') {
      result.push(words[i]);
    }
  }
  return result;
}

console.log(onlyNumbers(execuleWords));


/*
Question 2
Prompt: Create a function that returns the sum of all numbers in an array, ignoring non-numeric values. For example, ['1', 2, 'three', 4] should return 6.
*/

const totalNum = ['1', 2, 'three', 4];
function sumNumbers(NUMBER) {
  let sum = 0;
  for (let i = 0; i < NUMBER.length; i++) {
    if (typeof NUMBER[i] === 'number') {
      sum += NUMBER[i];
    }
  }
  return sum;
}

console.log(sumNumbers(totalNum))


/*
Question 3
Write a JavaScript function to calculate the average age of all female persons in an array of objects. Example array: [{name: 'Alice', age: 30, gender: 'female'}, {name: 'Bob', age: 25, gender: 'male'}].

*/

const totalPeople = [{name: 'Alice', age: 30, gender: 'female'}, 
                  {name: 'Bob', age: 25, gender: 'male'},
                 {name: 'Jane', age: 20, gender: 'female'}, 
                  {name: 'Mike', age: 22, gender: 'male'}, 
                  {name: 'Lisa', age: 24, gender: 'female'},
                  {name: 'Emma', age: 35, gender: 'female'}, 
                  {name: 'John', age: 40, gender: 'male'},
                 ];
function calAvgAge(people) {
  let femalePersons = [];
  people.forEach(person => {
    if (person.gender === 'female') {
      femalePersons.push(person);
    }
  });
  let sum = femalePersons.reduce((total, person) => total + person.age, 0);
  return sum / femalePersons.length;
}
console.log(calAvgAge(totalPeople));

// Prompt: Create a function that returns an array of strings converted to uppercase. Given ['hello', 'world'], it should return ['HELLO', 'WORLD'].

const words = ['hello', 'world'];
const upperCase = words.map(word => word.toUpperCase());

console.log(upperCase);

// Write a function that checks if a given string is a palindrome. A palindrome is a word that reads the same backward as forward, like 'radar'.
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward, such as madam or pop.

function charReverse(word){
  const reverseStr = word.split('').reverse().join('');
  return word === reverseStr;
}

console.log(charReverse('radar'));

// Create a function that converts a given string into an array of words. For instance, "I love JavaScript" should return ['I', 'love', 'JavaScript'].

/*
 const wordsSplit = "I love JavaScript";
const sepWords = wordsSplit.split("");
const wordsSplit1 = sepWords.join("");

console.log(sepWords);
console.log(wordsSplit1);

*/

const wordsSplit = "I love JavaScript";
const sepWords = wordsSplit.split(" ");


console.log(sepWords);