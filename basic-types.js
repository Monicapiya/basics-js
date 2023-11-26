const number = 1;
console.log(number, typeof number);

const bigNumber = 2345678911;
console.log(bigNumber, typeof bigNumber);

const string = 'person';
console.log(string, typeof string);

const boolean = true;
console.log(boolean, typeof boolean);

const symbol = '@';
console.log(symbol, typeof symbol);

let undefinedx = undefined;
console.log(undefinedx, typeof undefinedx);

const details = {
  phoneNumber: 1234567891,
  place: true,
  name: 'jur',
  symbol: '!'
};

console.log(details, typeof details);

function function1(cal){
  let a = 2;
      let b = 3
};

console.log(function1, typeof function1);

const nullValue = null;
console.log(nullValue, typeof nullValue);


let a = 'Hello';
let b = 3;

console.log(a+b);

var blub = 4;

console.log(blub);

var pi = 3.1415;
console.log('The value of the PI is', pi);

var costOfBubbleTea = 23;
var discount = 0.5;
var tax = 2;
var quantity = 5;
var total = (costOfBubbleTea + tax -discount) * 5;
console.log('The total cost of Bubble Tea is Rs:' + total);

var numOfEpisodes = 36;
var perSeason = 22/2;

console.log('The number of episodes per season is' + perSeason);

console.log (2 ** 6 + 'bits');
console.log (20 % 6);

var bigIntNum = BigInt(Number.MAX_SAFE_INTEGER)
console.log(bigIntNum);

var aLargeNumber = 19_23_34_45_56_67_78_899n;

console.log(aLargeNumber + 1n);


var user = 'Pia';
var desgination = 'Desginer';
var organization = 'zzz \u{2122}';
var city = 'Menosova';
var country = 'pinya';
var location = city + ', ' + country;
var favQuote = 'To \' single-quote\' or "double-quote"';

var empolyeeData = `Name: ${user}
Desgination: ${desgination}
Organization: ${organization}
Location:${location}
                    
`;

var greeting = `Hi my name is ${user} i am working at ${organization} as a ${desgination}`;

console.log(empolyeeData);

console.log(greeting);

var showReport = true;
var hasDownloaded = false;
var PaymentConfirmed = true;
var forceDelete = false;
var message = 'hey';
var showPostButton = !!message;
console.log(`Show Post Button: ${showPostButton}`);

var numOfCharacters = message.length;
var showEditButton = !!numOfCharacters;
console.log(`Show Edit Button: ${showEditButton}`);

var movies = {
  bestMovie: 'zzzeee',
  releaseYear: 2021,
  worstMovie: 'mpune',
  isflop: true,


};

console.log(movies.bestMovie);

//*let js = 'Amazing';
if(js === 'Amazing') 
alert('Javascript is fun');

let country = 'India';
let population = '140.76 crores';

let people;

let peoples = null;

console.log('Ally spent', 40 + 8 + 23);

console.log('The population of ' + country + ' is', population);

console.log(people);
console.log(peoples);

*/

/*
Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet 

Log the types of 'isIsland', 'population', 'country' and 'language'
to the console
*/

/*

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

*/

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

// math operators

const now = 2033;

const agePia = now - 1997;
const ageMela = now - 1998;

console.log(agePia, ageMela);

console.log(agePia * 2, agePia / 10, 2 ** 3);

const firstName = 'Mahi';
const lastName = 'Mchne';
console.log(firstName + ' ' + lastName);

//Assignment operators

let x = 10 + 5; //15
x+= 10; // x = x+ 10 = 25
x*= 4; // x= x* 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x)

//comparrison operators

console.log(agePia > ageMela); // <, >, <=, >=
console.log(agePia <= 20);

const massMark = 60;
const heightMark = 1.6764;
const massJohn = 63;
const heightJohn = 1.8288;

const BMIMark = massMark / (heightMark* heightMark);

const BMIJohn = massJohn / (heightJohn * heightJohn);

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark);
console.log(BMIJohn);
console.log(markHigherBMI);

 */

/*
If your country split in half, and each half would contain half the population,
then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than
Finland?
4. The average population of a country is 33 million people. Does your country
have less people than the average country?
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese'
*/

/*
const IndiaPopulation = 1_433_805_047;
let halfPopulation = 1_433_805_047 / 2;
halfPopulation++;

const FinlandPopulation = 6_000_000;

const highestPopulation = IndiaPopulation > FinlandPopulation;

console.log(halfPopulation);

console.log(highestPopulation);

const avgPopulation = 33_000_000;

const checkHighAvgPop = avgPopulation > IndiaPopulation;

console.log(checkHighAvgPop);

let description = 'Portugal is in Europe, and its 11 million people speak portuguese'


console.log(description);

*/

/*
If your country's population is greater that 33 million, log a string like this to the
console: 'Portugal's population is above average'. Otherwise, log a string like
'Portugal's population is 22 million below average' (the 22 is the average of 33
minus the country's population)
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original

*/


/*

const IndiaPopulation = 1_433_805_047;
const PortugalPopulation = 11000000;
const highPop = IndiaPopulation > PortugalPopulation;

console.log(highPop);

console.log(`Portugal's population is above average`);

*/

/*

const age = 15;
if(age >= 18) {
  console.log('Pia can apply for driving license');
} else {
  const yearLeft = 18 - age;
  console.log(`Pia you are too young. Wait for another ${yearLeft} years`);
}

*/

/*
const birthYear = 1876;

let century;

if(birthYear <= 2000, birthYear <= 1900) {
  century = 20;
}
 else {
  century = 21;
 }

 console.log(century);
 */

/*
 Type Conversion and Coercion
1. Predict the result of these 5 operations without executing them:
'9' - '5'; // 4
'19' - '13' + '17'; // - 1298// (19 - 13) + 17 = 617
'19' - '13' + 17; // 11 //(19 - 13) + 17 = 23
'123' < 57; // Nan // false
5 + 6 + '4' + 9 - 4 - 2; //  117
2. Execute the operations to check if you were right

*/


/*

console.log('9' - '5');

console.log('19' - '13' + '17');

console.log('19' - '13' + 17);

console.log('123' < 57);

console.log(5 + 6 + '4' + 9 - 4 - 2);

*/

// 5 falsy values 0, '', undefined, null, Nan


/*

const hasDriverLisence = true;
const hasGoodVision = false;

console.log(hasDriverLisence && hasGoodVision);
console.log(hasDriverLisence || hasGoodVision);

console.log(!hasDriverLisence);

const shouldDrive = hasDriverLisence && hasGoodVision;

if(shouldDrive){
console.log('Sarah can drive!');
} else {
  console.log('Sarah cannot drive!');
}
*/

/*
 There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.

TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.


*/

/*

let scoreDolphins = (96+108+89) / 3;
let scoreKoalas = (88+91+89) / 3;

let winner = scoreDolphins > scoreKoalas;

if(winner){
  console.log("Dolphins win the trophy 🏆");
} else if (winner) {
  console.log("Koalas win the trophy 🏆");
} else {
  console.log("Both win the trophy 🏆");
}

*/

/*

let scoreDolphins = (96+108+89) / 3;
let scoreKoalas = (88+91+89) / 3;

let winner = scoreDolphins > scoreKoalas;

if(winner && scoreDolphins >= 100){
  console.log("Dolphins win the trophy 🏆");
} else if (winner && scoreKoalas >= 100) {
  console.log("Koalas win the trophy 🏆");
} else if (winner && scoreKoalas >= 100 && scoreDolphins >= 100) {
  console.log("Both win the trophy 🏆");
} else {
  console.log("No one won the trophy 🏆")
}

*/





/*
let monday = 'Coding on monday';
let tuesday = 'Coding on tuesday';
let wednesday = 'Coding on wednesday';
let thursday = 'Coding on thursday';
let friday = 'Coding on friday';
let saturday = 'Coding on saturday';
let sunday = 'Coding on sunday';
let restday = 'Rest Day';

let day = restday;

if(day === monday){
console.log(monday);
} 
else if(day === tuesday){
  console.log(tuesday);
} 
else if(day === wednesday){
  console.log(wednesday);
} 
 else if(day === thursday){
  console.log(thursday);
}

else if(day === friday){
  console.log(friday);
}

else if(day === saturday){
  console.log(saturday);
}

else if(day === sunday){
  console.log(sunday);
} else {
  console.log(restday);
}

*/

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



function greetings(){
  console.log('Good Morning');
}

greetings(); //calling / running / invoking the function 

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`
  
  return juice;
}

const appleJuice = fruitProcessor(5,2);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(1,9);
console.log(appleOrangeJuice); 

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

/*

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

*/

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
change some variables in order to make the condition true (unless you live in
Canada :D)



*/

/*

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
*/


/*
The switch Statement
1. Use a switch statement to log the following string for the given 'language':
chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D'

*/

/*

const language = 'Mandarin';


 