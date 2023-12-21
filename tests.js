
let country = 'India';
let population = 140.76;

let isIsland = country;

let language;


isIsland = true;

console.log(typeof true);


console.log(typeof isIsland);

console.log(typeof country);

console.log(typeof population);

console.log(typeof language);



/*☀️
1. Set the value of 'language' to the language spoken where you live (some
countries have multiple languages, but just choose one)
2. Think about which variables should be const variables (which values will never
change, and which might change?). Then, change these variables to const.
3. Try to change one of the changed variables now, and observe what happens


let language = 'Telugu';

console.log(language);

const day = 'Day and night';

console.log(day);

language = 'Tamil';

console.log(language);

 */


/*☀️
Write a function that returns the square of a number
Function `findSquare()` returns the square of the input number which is passed as an argument in the function call.

*/

function findSquare(num){
  return num * num
}

console.log(findSquare(5));

/*☀️
Write a function to convert Celsius to Fahrenheit
Function `calFahrenheit()` returns the converted Celsius value to Fahrenheit value based on the formula `(Celsius × 9/5) + 32 = Fahrenheit`

formula C to F 👇

°F = °C × (9/5) + 32
*/

let Celsius = 52;

function calFahrenheit() {
  return Celsius * (9/5) + 32;
}

console.log(calFahrenheit());


/*☀️
 Write a function to find the area of a given Rectangle
Function `rectangleArea()` returns the rectangle area provided the width and height as the argument.
*/

function rectangleArea(a, b){
  return `area of recangle is ${a * b}`
}

console.log(rectangleArea(23,45));

/*☀️
Write a function to find the area and perimeter of a Circle
Function `circleValues()` returns the perimeter and area of the circle provided the radius as an argument for the function call.

formula = Area of a circle = πr. The perimeter of a circle = 2πr
*/

  function circleValues(radiusValue) {
    return `Perimeter: ${2*Math.PI*radiusValue}, Area: ${Math.PI*radiusValue*radiusValue}`;
  }

  console.log(circleValues(35));

/*☀️
  Count number of Vowels in String
Function `countVowel()` returns the number of vowels in input string. Learn more about JavaScript String methods from javatpoint.com/javascript-string.
*/

function countVowel(words) {
  let count = 0;
  words=words.toLowerCase();
  for(let i=0;i<words.length;i++){
    if(words.charAt(i)=="a"||words.charAt(i)=="e"||words.charAt(i)=="i"||
    words.charAt(i)=="o"||words.charAt(i)=="u"){
       count++; //Increment vowel count
    }
  }
  return count;
}

console.log(countVowel(Mahi));


 // ☀️Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  

let side1 = 5;
let side2 = 6;
let side3 = 7;
let s = side1+side2+side3 /2;
const area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));

console.log(area);

// ☀️Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

let  createCounter = function(n) {
  return function() {
      return n++;
  };
};

const counter = createCounter(10);

counter();
counter();
counter();
counter();


//☀️Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

//toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
//notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

/*
 incorrect code: 👇

 let expect = function(val) {
    //return { }
      function toBe(valRec) {
        if(val === valRec) {
        return ture; 
      } else {
        return 'Not Equal';
    }
      }
      
};


*/


/* correct code 👇🌟
  function expect(value) {
  return {
    toBe: function (expectedValue) {
      if (value !== expectedValue) {
        throw new Error("Not Equal");
      }
      return true;
    },
    notToBe: function (unexpectedValue) {
      if (value === unexpectedValue) {
        throw new Error("Equal");
      }
      return true;
    },
  };
}

console.log(expect(7).notToBe(6));

*/

/*☀️
  Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

    The three functions are:

    increment() increases the current value by 1 and then returns it.
    decrement() reduces the current value by 1 and then returns it.
    reset() sets the current value to init and then returns it.
*/

function createCounter(init) {
  let sol = init;

  return {
    increment() {
      return ++sol;
    },
    decrement() {
      return --sol;
    },
    reset() {
      sol = init;
      return sol;
    },
  };
}

console.log(createCounter(9).decrement());
console.log(createCounter(9).increment());
console.log(createCounter(9).reset());

/*
☀️
   You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

      Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

*/


function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }
  let x = 0,
    y = 0;
  for (const direction of walk) {
    switch (direction) {
      case "n":
        y++;
        break;
      case "s":
        y--;
        break;
      case "e":
        x++;
        break;
      case "w":
        x--;
        break;
    }
  }
  return x === 0 && y === 0;
}

const walk1 = ['n', 'e', 's', 'w', 'n', 'e', 's', 'w', 'n', 'e'];
const walk2 = ['n', 'n', 's', 's', 'e', 'w', 'e', 'w', 'n', 's'];
const walk3 = ['n', 'e', 's', 'w', 'n', 'e', 's', 'w', 'n', 'n'];
const walk4 = ['n','s','n','s','n','s','n','s','n','s'];

console.log(isValidWalk(walk1));
console.log(isValidWalk(walk2));
console.log(isValidWalk(walk3));
console.log(isValidWalk(walk4));

/*☀️
  Write a JavaScript program to display the current day and time in the following format.
  Today is : Tuesday.
  Current time is : 10 PM : 30 : 38
*/

let today = new Date();
let day = today.getDay();
let dayList =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log(`Today is: ${dayList[day]}.`);

let hrs = today.getHours();
let min = today.getMinutes();
let second = today.getSeconds();
let prepand = (hrs >= 12) ? " PM " : " AM ";

// Check for special cases when hour is 0
if (hrs === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hrs = 12;
        prepand = ' Noon';
    } else {
        hrs = 12;
        prepand = ' PM';
    }
}

// Check for special cases when hour is 0
if (hrs === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hrs = 12;
        prepand = ' Midnight';
    } else {
        hrs = 12;
        prepand = ' AM';
    }
}

console.log(`Cuurent time is: ${hrs} ${prepand} ${min} Min ${second} Seconds.`);

// ☀️Write a JavaScript program to get the current date.  
//Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yr = today.getFullYear();
if(dd < 10) {
  dd = '0' + dd;
}

if(mm < 10) {
  mm = '0' + mm;
}

let today1 = dd + '-' + mm + '-' + yr;

console.log(today1);

//☀️ Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  

let side1 = 5;
let side2 = 6;
let side3 = 7;

let side = (side1+side2+side3)/2

let area = Math.sqrt(side * ((side - side1) * (side - side2) * (side - side3)));

console.log(area);

//☀️ Write a JavaScript function that reverses a number. Example x = 32243; Expected Output : 34223

function reverseNum(number) {
   // Convert the input number to a string
  number = number + '';
  // Split the string into an array of characters, reverse the array, and then join the characters back into a string
   return number.split('').reverse().join("");
  }
  
  console.log(Number(reverseNum(98765)));


  // ☀️Write a JavaScript function that checks whether a passed string is a palindrome or not?

  function wordsCheck(word){
    const revWords = word.split('').reverse().join('');
   return word === revWords;
  }

console.log(wordsCheck('pop'));

//☀️Write a JavaScript function that generates all combinations of a string. Example string : 'dog' Expected Output : d,do,dog,o,og,g
// example below👇

function substrings(str1) {
  // Initialize an empty array to store individual characters of the input string
  let array1 = [];

  // Loop through the characters of the input string and store each character in the array
  for (var x = 0, y = 1; x < str1.length; x++, y++) {
    array1[x] = str1.substring(x, y);
  }

  // Initialize an empty array to store all combinations
  let combi = [];
  let temp = "";
  
  // Calculate the total number of combinations using the formula 2^n
  let slent = Math.pow(2, array1.length);

  // Generate all combinations using bitwise operations
  for (let i = 0; i < slent; i++) {
    temp = "";
    
    // Iterate through each character in the array
    for (let j = 0; j < array1.length; j++) {
      // Check if the j-th bit of the binary representation of i is set
      if (i & Math.pow(2, j)) {
        // If set, append the corresponding character to the temporary string
        temp += array1[j];
      }
    }

    // If the temporary string is not empty, add it to the combinations array
    if (temp !== "") {
      combi.push(temp);
    }
  }

  // Log the generated combinations, joined by newline, to the console
  console.log(combi.join("\n"));
}

// Call the substrings function with the input string "dog"
substrings("dog"); 


/*
 Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.
The below code didnt pass the test 👇

*/

function transformArray(array, fn) {
  const transformedArray = [];
  for (let i = 0; i < array.length; i++) {
    transformedArray[i] = fn(array[i], i);
  }
  return transformedArray;
}

const newArray = [1,4,5];

const multiplyByTwo = (element) => element * 2;
const addarray = (element) => element + 1;
const forceArray = (element) => element = 42;

console.log(transformArray(newArray, multiplyByTwo));
console.log(transformArray(newArray, addarray));
console.log(transformArray(newArray, forceArray));


// array.push 

const names = ['Van', 'Bea', 'Nam'];
names.push = 'Pam';
console.log(names); // output: [ 'Van', 'Bea', 'Nam', push: 'Pam' ]

// array.pop

const names = ['Van', 'Bea', 'Nam'];
names.pop();
console.log(names); // output: [ 'Van', 'Bea' ]

// array.shift

const names = ['Van', 'Bea', 'Nam'];
names.shift();
console.log(names); // output: [ 'Bea', 'Nam' ]

//array.unshift

const names = ['Van', 'Bea', 'Nam'];
names.unshift('Pam');
console.log(names); // output: [ 'Pam', 'Van', 'Bea', 'Nam' ]

//array.slice

const names = ['Van', 'Bea', 'Nam'];
const newList = names.slice(1);
console.log(newList); // output: [ 'Bea', 'Nam' ]

//array.splice 

const names = ['Van', 'Bea', 'Nam', 'Pam'];
const newList = names.splice(0, 3);
console.log(newList);  // output: [ 'Van', 'Bea', 'Nam' ]

// Array.Prototype.Concat()

const names = ['Van', 'Bea', 'Nam', 'Pam'];

const newList = ['Mia', 'Bee', 'Cam', 'Zee'];

names.concat(newList); // output: [ 'Van', 'Bea', 'Nam', 'Pam', 'Mia', 'Bee', 'Cam', 'Zee' ]

// Array.Prototype.IndexOf()

const names = ['Van', 'Bea', 'Nam', 'Pam'];

names.indexOf('Nam'); // output: 2

// Array.Prototype.LastIndexOf()

const names = ['Van', 'Bea', 'Nam', 'Pam','Bea'];

names.lastIndexOf('Bea'); // output: 4

// Array.Prototype.Join()

const names = ['Van', 'Bea', 'Nam', 'Pam','Bea'];

names.join(' '); // output: 'Van Bea Nam Pam Bea'
