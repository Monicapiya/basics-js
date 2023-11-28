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
