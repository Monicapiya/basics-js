const number = 1;
console.log(number, typeof number);

const bigNumber = 2345678911;
console.log(bigNumber, typeof bigNumber);

const string = 'person';
console.log(string, typeof string);

const boolean = true;
console.log(boolean, typeof boolean);

const symbol = '@';
console.log(symbol, typeof symbol);

let undefinedx = undefined;
console.log(undefinedx, typeof undefinedx);

const details = {
  phoneNumber: 1234567891,
  place: true,
  name: 'jur',
  symbol: '!'
};

console.log(details, typeof details);

function function1(cal){
  let a = 2;
      let b = 3
};

console.log(function1, typeof function1);

const nullValue = null;
console.log(nullValue, typeof nullValue);


let a = 'Hello';
let b = 3;

console.log(a+b);

var blub = 4;

console.log(blub);

var pi = 3.1415;
console.log('The value of the PI is', pi);

var costOfBubbleTea = 23;
var discount = 0.5;
var tax = 2;
var quantity = 5;
var total = (costOfBubbleTea + tax -discount) * 5;
console.log('The total cost of Bubble Tea is Rs:' + total);

var numOfEpisodes = 36;
var perSeason = 22/2;

console.log('The number of episodes per season is' + perSeason);

console.log (2 ** 6 + 'bits');
console.log (20 % 6);

var bigIntNum = BigInt(Number.MAX_SAFE_INTEGER)
console.log(bigIntNum);

var aLargeNumber = 19_23_34_45_56_67_78_899n;

console.log(aLargeNumber + 1n);


var user = 'Pia';
var desgination = 'Desginer';
var organization = 'zzz \u{2122}';
var city = 'Menosova';
var country = 'pinya';
var location = city + ', ' + country;
var favQuote = 'To \' single-quote\' or "double-quote"';

var empolyeeData = `Name: ${user}
Desgination: ${desgination}
Organization: ${organization}
Location:${location}
                    
`;

var greeting = `Hi my name is ${user} i am working at ${organization} as a ${desgination}`;

console.log(empolyeeData);

console.log(greeting);

var showReport = true;
var hasDownloaded = false;
var PaymentConfirmed = true;
var forceDelete = false;
var message = 'hey';
var showPostButton = !!message;
console.log(`Show Post Button: ${showPostButton}`);

var numOfCharacters = message.length;
var showEditButton = !!numOfCharacters;
console.log(`Show Edit Button: ${showEditButton}`);
