for (let rep = 1; rep<=10; rep++){
  console.log( `Lifting weights repetition ${rep}`);
}

const joeArray = [
  'Joe',
  'Narnia',
  2037 - 1992,
  'teacher',
  ['Jaine', 'Pete', 'Kam'],
  true
];

const types = [];

for(let i = 0; i < joeArray.length; i++) {
  console.log(joeArray[i], typeof joeArray[i]);

  //filling up arrays
  // types[i] = typeof joeArray[i];
  types.push(typeof joeArray[i]);
}

console.log(types);

const years = [1990, 1991, 1992, 1993,1994];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break statement

console.log('---ONLY STRINGS---');
for(let i = 0; i < joeArray.length; i++) {
  if(typeof joeArray[i] !== 'string') continue;

  console.log(joeArray[i] , typeof joeArray[i] );
}

//Break statement

console.log('---ONLY Numbers---');
for(let i = 0; i < joeArray.length; i++) {
  if(typeof joeArray[i] === 'number') break;

  console.log(joeArray[i] , typeof joeArray[i] );
}