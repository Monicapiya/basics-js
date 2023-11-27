  /*

the Conditional (Ternary) Operator
1. If your country's population is greater than 33 million, use the ternary operator 
to log a string like this to the console: 'Portugal's population is above average'. 
Otherwise, simply log 'Portugal's population is below average'. Notice how only
one word changes between these two sentences!
2. After checking the result, change the population temporarily to 13 and then to 
130. See the different results, and set the population back to original
  
  */

  /*

let population = 33000000;
let countryPopulation = 3;

if(population >= countryPopulation){
  console.log("Portugal's population is above average");
} else if (population <= countryPopulation) {
  console.log(`Portugal's population is below average`);
}

*/

// Arrow Function 👇

const calAge3 = birthyear => 2037 - birthyear;
const age3 = calAge3(1999);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;

  // return retirement

  return `${firstName} retires in ${retirement} years`;
} 

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1981, 'Bob'));

//Function declaration 👇

function calAgel(birthyear) {
  return 2037 - birthyear;
}

const age1 = calAgel(1991);

console.log(age1);

//Function expression 👇

const calAge2 = function(birthyear) {
  return 2039 - birthyear;
}

const age2 = calAge2(1991);

console.log(age2, age1);


