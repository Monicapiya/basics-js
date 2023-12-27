const numArray = [
  [2, 3],
  [12, 32],
  [6, 7],
  [45, 55, 66],
  [87, 67],
  [
    [60, 77],
    [49, 99],
  ],

  [
    [33, 55],
    [67, 88],
  ],

  ];
  
const flatArr = numArray.flat(2).filter((elem) => elem % 2 === 0);
console.log(flatArr);

// Output: [ 2, 12, 32, 6, 66, 60, 88 ]


const numArray = [
  [
     [2, 3],
   [12, 32],
  ],
   [
     [6, 7],
   [45, 55, 66],
   [87, 67],
   ],
   [
     [60, 77],
     [49, 99],
   ],
 
   [
     [33, 55],
     [67, 88],
   ],
 
   ];
 
 
 const calcDistance = ([x1, w1], [e2, r2]) => 
 Number(Math.hypot(e2 - x1, r2 - w1).toPrecision(3));
 const shortestRoute = numArray
 .flatMap(([p1, p2]) => calcDistance(p1, p2) )
 .filter((elem) => elem < 88)
 .sort((a, b) => a - b);
 console.log(shortestRoute);

 // Output: [ 24.6, 30.7, 47.4, 61.8 ]


 const coords = [
  [
    [2, 5],
    [6, 4],
  ],
  [
    [3, 2],
    [5, 2],
  ],
  [
    [5, 12],
    [15, 3],
  ],
  [
    [4, 12],
    [13, 5],
  ],
];

const calcDistance = ([x1, y1], [x2, y2]) =>
  Number(Math.hypot(x2 - x1, y2 - y1).toPrecision(5));

const findEven = coords.flat(2).filter((elem) => elem % 2 === 0);
const computeDistance = coords.flatMap(([p1, p2]) => calcDistance(p1, p2));

console.log(`Even Coordinates: ${findEven}`);
console.log(`Distance between points: ${computeDistance}`);

/*
Output:

'Even Coordinates: 2,6,4,2,2,12,4,12'
'Distance between points: 4.1231,2,13.454,11.402'

*/




