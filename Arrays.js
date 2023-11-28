const friends = ['Moe', 'Eea', 'Palam'];
console.log(friends);

//Another way of creating array 👇

const years = new Array(1290,2345,1345,2134);

console.log(friends[0])

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Pia';
console.log(friends);

const calcAge = function(birthYear) {
  return 2037 - birthYear;
}
const years1 = [1990,1998,1890,3255];

const age1 = calcAge(years1[0]);
const age2 = calcAge(years1[1]);
const age3 = calcAge(years1[years1.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years1[0]), calcAge(years1[1]),calcAge(years1[years1.length - 1])  ];

console.log(ages);

//methods of Array 👇

// push method 🌟

const friends1 = ['Moe', 'Eea', 'Palam'];
friends1.push('Kia'); // const newlength = friends1.push('Kia');
console.log(friends1);

// unshift method  🌟
friends1.unshift('Ian'); 
console.log(friends1);

// remove method  🌟


friends1.pop(); 
console.log(friends1);

// shift method  🌟
friends1.shift('Ian'); 
console.log(friends1);

// indexof  method  🌟

console.log(friends1.indexOf('Eea'));

// includes  method  🌟
console.log(friends1.includes('Eea'));


if(friends.includes('Kia')){
  console.log('You have a friend called Kia');
} else {
  console.log('Sorry!! the person you are checking for is not in your friend list');
}


function calcTip(bill){
  // return bill >= 50 && bill <=300 ? bill * 15/100 : bill * 20/100;
  
  return bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.2;
}
const bills = [35, 290, 500];

const tip = [calcTip(bills[0]),calcTip(bills[1]), calcTip(bills[1]) ];

console.log(bills, tip);

const tip1 = `${[bills[0]]} + ${[calcTip(bills[0])]}`
const tip2 = `${[bills[1]]} + ${[calcTip(bills[1])]}`
const tip3 = `${[bills[2]]} + ${[calcTip(bills[2])]}`

const total = `${tip1} , ${tip2}, ${tip3}`



console.log(total);
 