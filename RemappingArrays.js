/*
The map() method

This is an Array prototype method that ingests an array, executes a function for every element in that array and return the newly created array

[1,2,3,4,5].map((elem) => elem * 15);

out put: [15,30,45,60,75]

Note: This method returns a new array and does not mutate the original array

*/

const colors = ['Red', 'White', 'Pink'];
const crayons = colors.map((elem) => `${elem} crayon`);

console.log(crayons);

// out put: [ 'Red crayon', 'White crayon', 'Pink crayon' ]

const numArray = [
[2,3],
[6, 9],
[98, 43, 90],
[55, 45, 65]
];

const toSum = (arr) => arr.map(([a, b]) => a + b);

console.log(toSum(numArray)); // output: [ 5, 15, 141, 100 ]


const users = [
  {

    name: "Pia",
    age: 24,
    speciality: 'General Medicne',
  },
   
  {
   
    name: "Mia",
    age: 25,
    speciality: 'Gyologist',
  },

  {
   
    name: "Sia",
    age: 26,
    speciality: 'Cardilogist',
  },

  {
   
    name: "Naru",
    age: 27,
    speciality: 'Nursing',
  },

  {
   
    name: "Tyler",
    age: 28,
    speciality: 'Biomedicine',
  },

];

const genId = () => parseInt(Math.random() * 1000000)
const withIds = users.map((user) => {
return {
id: genId().toString(),
...user,
};
});

console.log(withIds);

/*
Output:

[
  {
    id: '460053',
    name: 'Pia',
    age: 24,
    speciality: 'General Medicne'
  },
  {
    id: '416362',
    name: 'Mia',
    age: 25,
    speciality: 'Gyologist'
  },
  {
    id: '645364',
    name: 'Sia',
    age: 26,
    speciality: 'Cardilogist'
  },
  {
    id: '721490',
    name: 'Naru',
    age: 27,
    speciality: 'Nursing'
  },
  {
    id: '172446',
    name: 'Tyler',
    age: 28,
    speciality: 'Biomedicine'
  }
]

*/


const citizens = [
  {
    id: 1,
    name: 'John Smith',
    age: 65,
  },
  {
    id: 2,
    name: 'Roger McShane',
    age: 68,
  },
  {
    id: 3,
    name: 'Dolly McShane',
    age: 55,
  },
  {
    id: 4,
    name: 'Joan Mockery',
    age: 61,
  },
];

const seniorCitizens = citizens.map(function (person)
{
person.isSeniorCitizen = person.age >=60;
return person;
});

console.log(seniorCitizens);

/*
Output:

[
  {
    id: 1,
    name: 'John Smith',
    age: 65,
    isSeniorCitizen: true
  },
  {
    id: 2,
    name: 'Roger McShane',
    age: 68,
    isSeniorCitizen: true
  },
  {
    id: 3,
    name: 'Dolly McShane',
    age: 55,
    isSeniorCitizen: false
  },
  {
    id: 4,
    name: 'Joan Mockery',
    age: 61,
    isSeniorCitizen: true
  }
]

*/
