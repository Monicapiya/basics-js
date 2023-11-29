const jonasArray = [
  'Joe',
  'Narnia',
  2037 - 1992,
  'teacher',
  ['Jaine', 'Pete', 'Kam']
];

//Objects 👇

const joe = {
  firstName:'Joe',
  lastName:'Narnia',
  age:2037 - 1992,
  profession:'teacher',
  collegues: ['Jaine', 'Pete', 'Kam']
};

console.log(joe.firstName)

console.log(joe['lastName']);

const nameKey = 'Name';
console.log(joe['first' + nameKey]);
console.log(joe['last' + nameKey]);

const intersetedIn = prompt('What do you want to know about Joe? Choose firstName, lastName, age, job, and friends' );


if(joe[intersetedIn]) {
  console.log(joe[intersetedIn]);
} else {
  console.log('The information you are searching is not available');
}

joe.location = 'Snowland';
joe['twitter'] = '@mnbvc';
console.log(joe);

//Jonas has 3 frinds and his best friend is called Kam

console.log(`${joe.firstName} has ${joe.collegues.length} friends, and he is close with collegue called ${joe.collegues[0]}` );

const jonas = {
  firstName:'Jonas',
  lastName:'Miche',
  birthYear: 1990,
  job:'Desginer',
  hasDriverLicense:true,
  /* 

  calAge: function(birthYear){
   return 2035 - birthYear; // only function expression works here, function declration doesnt work
  }
  calAge:function(){
    return 2035 = this.birthYear
  }
*/

calAge:function(){
  this.age = 2035 - this.birthYear
  return this.age;
},

getSummry: function (){
  return `${this.firstName} is a ${this.calAge()} year old ${jonas.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license`
}

}

// console.log(jonas.calAge(1990));

console.log(jonas.calAge());
console.log(jonas.age);
console.log(jonas.getSummry());
 

const mark = {
  fullName: 'Mark Miller',
  mass:60,
  height:1.6764,
}

const john = {
  fullName: 'John Smith',
  mass:63,
  height:1.8288,
}

function calcBMI(){
     const calcBMI = mark.mass / (mark.height*mark.height);
      const calcBMI1 = john.mass / (john.height*john.height);
  
  return calcBMI
 return calcBMI1
}

function calcBMI1(){
const calcBMI1 = john.mass / (john.height*john.height);
 return calcBMI1
}

console.log(calcBMI());
console.log(calcBMI1());

console.log(`Mark Miller (${calcBMI()}) is higher than John Smith's(${calcBMI1()})! `);

/* 
The code you've written in JavaScript has a few issues and improvements that can be made. Here's an analysis and a revised version:

Duplicate Function Names: You have two functions named calcBMI and calcBMI1. It's better to have a single function that can calculate BMI for any person.

Returning Multiple Values: In your calcBMI function, you have two return statements. A function exits as soon as it hits the first return, so the second return calcBMI1 will never be executed.

Code Reusability: You can improve the code by making it more reusable. Instead of hardcoding the values for Mark and John inside the function, you can pass the person's data as an argument.

Template Literals: Your use of template literals in the console.log statement is correct, but you are calling the functions calcBMI() and calcBMI1() again, which is unnecessary and inefficient since you already called them before.

Here's a revised version of your code:

javascript

*/

const mark = {
  fullName: 'Mark Miller',
  mass: 60,
  height: 1.6764,
};

const john = {
  fullName: 'John Smith',
  mass: 63,
  height: 1.8288,
};

function calcBMI(person) {
  return person.mass / (person.height * person.height);
}

const bmiMark = calcBMI(mark);
const bmiJohn = calcBMI(john);

console.log(bmiMark);
console.log(bmiJohn);

console.log(`Mark Miller (${bmiMark}) has a higher BMI than John Smith's (${bmiJohn})! `);

/*

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
}

*/