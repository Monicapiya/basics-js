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

  calAge: function(birthYear){
    return 2035 - birthYear; // only function expression works here, function declration doesnt work
  }
}

console.log(jonas.calAge(1990));
