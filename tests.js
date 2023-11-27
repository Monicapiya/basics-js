
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