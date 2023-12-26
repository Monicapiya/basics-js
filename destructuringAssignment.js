// Destructuring Assignment is a syntax that can be used with noth Array and objects


let joe = ['Joe', 45, 'UI'];
let [user, , job] = joe;

console.log(user, job)

/*
output:

'Joe' 'UI'

*/


let isLoading = true;
let showUI = false;

[isLoading, showUI] = [showUI, isLoading];

console.log(`isLoading: ${isLoading}`);

console.log(`showUI: ${showUI}`);

/*
output:

[ false, true ]
'isLoading: false'
'showUI: true'

*/


let restaurants = [
  {
  name: 'Bao Boat',
  category: 'Oriental',
  city:'NewYork',
  },
  
  {
  name: 'Imperial Diner',
  category: 'Contienetal',
  city:'Los Angeles',
  },
  
  ];
  
  const findDetails = (name) => {
  let findPlace = restaurants.find((elem) => elem.name === name);
  return findPlace ? [findPlace.category, findPlace.city]: [];
  
  };
  
  let [category, city] = findDetails('Bao Boat');
  console.log(`category: ${category}, city: ${city} `);
  
/*
output:

'category: Oriental, city: NewYork '

*/

let fruits = ['Apple', 'Kiwi', 'PineApple'];

let [pie, smoothie, ...rest] = fruits;

console.log(`I love ${pie} pie`);

console.log(`Let's whip up a ${smoothie} smoothie`);

console.log(`Remaining fruits: ${rest}`);


/*
output:
'I love Apple pie'
"Let's whip up a Kiwi smoothie"
'Remaining fruits: PineApple'

*/

