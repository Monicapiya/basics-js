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

