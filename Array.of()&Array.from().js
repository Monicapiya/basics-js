let myArray = Array.of('Apple', 'Mango');
console.log(myArray);

/*
output:

[ 'Apple', 'Mango' ]

*/


let numArray = Array.of(10);
console.log(numArray);

/*
output:

[ 10 ]

*/


const isPalindrome = (word) => Array.from(word).reverse().join('') === word;

console.log(isPalindrome('civic'));

/*
output:

true

*/


const getArrayArgs = function () {
  return Array.from(arguments);
 };
 
 console.log(getArrayArgs(2, 3, 4, 'Hello'));
 
/*
output:

[ 2, 3, 4, 'Hello' ]

*/

// if icecream is passed through expect vowels other characters should be sent as output  - icecream -> ccrm

function remChar(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  let result = '';

  for(let i = 0; i < word.length; i++) {

  if(!vowels.includes(word[i].toLowerCase())) {

  result += word[i];

  }

  }

  return result;
  
  };
  
  console.log(remChar('word'));
/*
output:

'wrd'

*/



const randomNums = (count) => 

Array.from(new Array(count), (elem) => parseInt(Math.random() * 10000));

console.log(randomNums(20));

/*
output:
random nums will be generated

[ 6844, 7346, 5304, 4158, 2943, 905, 7752, 7714, 9289, 2489, 4830, 8029, 49, 9797, 1643, 6949, 559, 715, 1919, 5099 ]

*/


