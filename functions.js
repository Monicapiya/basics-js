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


//Functions calling other fucntions 👇

const cutPieces = function(fruit) {    //we are creating a function that can be used to cut the fruit into the smaller pieces, in place of we can as number of pieces as we required such as 4, 6 etc.... 
  return fruit * 4;
}



function fruitProcessor1(apples, oranges) {

  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges); //calling cutPieces function

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`
  
  return juice;
}

console.log(fruitProcessor1(2,3));

/*
  Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.



TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

*/


let score = 44+23+71;
const calcAverage = avgScore => score / avgScore;

const DolphinsAvgScore = calcAverage(3);

console.log(DolphinsAvgScore);

let score1 = 65+54+49;
const calcAverage1 = avgScore1 => score1 / avgScore1;
const KoalasAvgScore = calcAverage(3);

console.log(KoalasAvgScore);


const scoreDolphins = DolphinsAvgScore;

const scoreKoalas = KoalasAvgScore;

function checkWinner(scoreDolphins, scoreKoalas){
  if (scoreDolphins>scoreKoalas)
  console.log('Dolphins  has won the game');
  else if(scoreKoalas>scoreDolphins){
    console.log('Koalas  has won the game');
  } else {
    console.log('No team won the game');
  }
  
} 

checkWinner();

