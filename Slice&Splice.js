// Slice method: used to chop the arrays

const desk = ['Desk', 'Water', 'Laptop', 'Mouse'];
console.log(desk.slice(1, 3)); // Output: [ 'Water', 'Laptop' ]

const keys = ['XDC-102-2203', 'XDC-202-4503', 'XDC-786-6789'];
const dateStrings = keys.map((elem) => elem.slice(8));
console.log(dateStrings);

const keyCodes = keys.map(elem => elem.slice(4, 5));
console.log(keyCodes);  // Output: [ '2203', '4503', '6789' ] [ '1', '2', '7' ]

// Splice method: A mutator method that can remove elements from anywhere in the array and optionally replace or insert new elements 

// Note: If no elements are to be removed then the new items are inseted at the given location, pushing existing elemnts further down into the array


const desk = ['Desk', 'Water', 'Laptop', 'Mouse', 'Bottle', 'Keyboard'];
console.log(desk.splice(1, 3)); // Output: [ 'Water', 'Laptop', 'Mouse' ]


const desk = ['Desk', 'Water', 'Laptop', 'Mouse', 'Bottle', 'Keyboard'];
desk.splice(1, 2, 'WifiBox');
console.log(desk); // Output: [ 'Water', 'Laptop' ] [ 'Desk', 'WifiBox', 'Mouse', 'Bottle', 'Keyboard' ]

const desk = ['Idol', 'Water', 'Laptop', 'Mouse', 'Bottle', 'Keyboard'];
const move = (arr, start, count, moveTo) => {
const clone = [...arr];
clone.splice(moveTo, 0, ...clone.splice(start, count));
return clone;
};

let newDesk = move(desk, 2, 2, 0);



console.log(newDesk); // Output: [ 'Laptop', 'Mouse', 'Idol', 'Water', 'Bottle', 'Keyboard' ]


const hollywoodDirectors = [
  'Martin Scorsese',
  'David Dhawan',
  'Steven Spielberg',
  'Christopher Nolan',
  'Quentin Tarantino',
  'James Cameron',
];

const removeAndInsert = (arr, elem, newElem) => {
    const findElem = arr.findIndex((e) => e === elem);
    const tempArray = [...arr];
    tempArray.splice(findElem, 1, newElem);
    return tempArray;
  };
  
  const topThree = (arr) => arr.slice(0, 3);
  
  const revisedList = removeAndInsert(
    hollywoodDirectors,
    'David Dhawan',
    'David Lean'
  );
  const directors = topThree(revisedList);

console.log(`Hollywood Masterclass featuring ${directors}`);

// Output: 'Hollywood Masterclass featuring Martin Scorsese,David Lean,Steven Spielberg'
