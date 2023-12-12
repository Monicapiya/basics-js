
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



/*
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


/*
Write a function that returns the square of a number
Function `findSquare()` returns the square of the input number which is passed as an argument in the function call.

*/

function findSquare(num){
  return num * num
}

console.log(findSquare(5));

/*
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


/*
 Write a function to find the area of a given Rectangle
Function `rectangleArea()` returns the rectangle area provided the width and height as the argument.
*/

function rectangleArea(a, b){
  return `area of recangle is ${a * b}`
}

console.log(rectangleArea(23,45));

/*
Write a function to find the area and perimeter of a Circle
Function `circleValues()` returns the perimeter and area of the circle provided the radius as an argument for the function call.

formula = Area of a circle = πr. The perimeter of a circle = 2πr
*/

  function circleValues(radiusValue) {
    return `Perimeter: ${2*Math.PI*radiusValue}, Area: ${Math.PI*radiusValue*radiusValue}`;
  }

  console.log(circleValues(35));

/*
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


 // Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  

let side1 = 5;
let side2 = 6;
let side3 = 7;
let s = side1+side2+side3 /2;
const area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));

console.log(area);

// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

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


//Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

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

/*
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

/*
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