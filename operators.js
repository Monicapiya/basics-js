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

/*

Equality Operators: == vs. ===

Declare a variable 'numNeighbours' based on a prompt input like this: 
prompt('How many neighbour countries does your country 
have?');
2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality 
== for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
is greater than 1
4. Use an else block to log 'No borders' (this block will be executed when 
'numNeighbours' is 0 or any other value)
5. Test the code with different values of 'numNeighbours', including 1 and 0.
6. Change == to ===, and test the code again, with the same values of 
'numNeighbours'. Notice what happens when there is exactly 1 border! Why 
is this happening?
7. Finally, convert 'numNeighbours' to a number, and watch what happens now 
when you input 1
8. Reflect on why we should use the === operator and type conversion in this 
situation

*/



const  numNeighbours = prompt('How many neighbour countries does your country have?')

console.log(numNeighbours);

if(numNeighbours ===1) {
  console.log(`There are total ${numNeighbours} nieghbour`);
} else if (numNeighbours >=1){
  console.log(`There is increase in ${numNeighbours} nieghbours`);
} else if(numNeighbours <=0) {
  console.log(`No borders`);
}

console.log(typeof numNeighbours);



/*
Logical Operators

1.Comment out the previous code so the prompt doesn't get in the way
2. Let's say Sarah is looking for a new country to live in. She wants to live in a
country that speaks english, has less than 50 million people and is not an
island.
3. Write an if statement to help Sarah figure out if your country is right for her.
You will need to write a condition that accounts for all of Sarah's criteria. Take
your time with this, and check part of the solution if necessary.
4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
not, log 'Portugal does not meet your criteria :('
5. Probably your country does not meet all the criteria. So go back and temporarily
change some variables in order to make the condition true 



*/



let newCountry;
let language = 'English';
let population = '50 million people'
let island = false;

let metRequirement;
let metRequirement1;


if(metRequirement = (newCountry !== island && language ==='English' && population === '50 million people'))

if (metRequirement1 = (newCountry !== island && language ==='Hindi' && population === '50 million people')){
  metRequirement === metRequirement1;
  console.log('Has met the requirements, You should live in Portugal');
} else {
  console.log('Has not met the requirements, Sorry');
}



// conditional operator

/*
const age = 20;

// age >=18 ? console.log('I would like to drink wine'): console.log('I would like to drink water');

const drink = age>=18 ? 'Drink Wine' : 'Drink water';

console.log(drink);

let drink2;
if(age >= 18){
  drink2 = 'Red Wine';
} else{
  drink2 = 'Fruit Juice';
}

console.log(drink2);

console.log(`I would like to drink ${age>=18 ? 'Drink Wine' : 'Drink water'}`);

*/

/*

Your tasks:

Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

Example: The bill was 275, the tip was 41.25, and the total value 316.25.

Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

TEST DATA: Test with different bill values: 275, 40, and 430
*/

/*

const bill = 430;

let tip = bill<=300 ? bill * 15/100 : bill * 20/100; // bill<=300 && bill>=300

console.log(`The bill was ${bill}, the tip was ${tip}, and the total bill is ${(bill + tip)}`);




*/


 