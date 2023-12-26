//The for of loop

// Array prototype includes various iteration methods that can be used to iterate through and process Data.
for(const data of sensorData) {
  console.log(`${data.date} | MAX: ${data.maxTemp}, MIN: ${data.minTemp} `);
}

// for each method

// At every iteration, the forEach method method executes a callback function and provides access to the current element from the array and the index number, to work with the data within the function 


sensorData.forEach(function (elem, index) {
  console.log(`${elem.date} | MAX: ${elem.maxTemp}, MIN: ${elem.minTemp} `);
})


const books = [
  'LMW',
  'SMWC',
  'TT1980',
  'RAM',
  ];
  
  const flipTiles = function(elem, index) {
  console.log(elem.split(' ').reverse().join(' '));
  };
  
  books.forEach(flipTiles);

  /*
  output:

   'LMW'
'SMWC'
'TT1980'
'RAM'
  */


const users = `
id,first_name,last_name,phone_number,gender
1,Sun,Sunlight,098765,Male
2,Moon,MoonLight,98765,Male
3,Plant,Photosyntics,87654,Female
4,Air,Water,765432,Female
5,North,South,7654321,Male

`;

const csvArray = (csv) => {
  let output = [];
  csv.split('\n').forEach((row) => output.push(row.split(',')));
  return output;
};

const convertToObj = (arr) => {
  let output = [];
  arr.forEach((elem, index) => {
  // skip index 0
  if(index !== 0) {
  let obj = {};
  elem.forEach((elem, index) => {
  obj[arr[0][index]]= elem;
  });
  output.push(obj);
  }
  });
  return output;
  };

let csvToObj = convertToObj(csvArray(users));
console.log(csvToObj)

  /*
  output:

 [
  { '': 'id', undefined: 'gender' },
  { '': '1', undefined: 'Male' },
  { '': '2', undefined: 'Male' },
  { '': '3', undefined: 'Female' },
  { '': '4', undefined: 'Female' },
  { '': '5', undefined: 'Male' },
  { '': '' },
  { '': '' }
]
  */


const prices = [100, 200, 300, 101, 23];
const Tax = function(tax){
this.tax = tax;
this.withTax = function(arr) {
let output = [];
arr.forEach(function(elem){
let withTax = (this.tax / 100) * elem + elem;
output.push(withTax);
}, this);
return output;
};
};

const gst5 = new Tax(5);
const gst18 = new Tax(18);

console.log(gst5.withTax(prices));
console.log(gst18.withTax(prices));

  /*
   output:
   
[ 105, 210, 315, 106.05, 24.15 ]
[ 118, 236, 354, 119.18, 27.14 ]
  */
