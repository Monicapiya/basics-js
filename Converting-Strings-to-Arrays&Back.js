const str = 'H:no. 60, xyz street, telephone pole, Thumbilla - 0875276';

console.log(str.split(',  '));

// output: [ 'H:no. 60, xyz street, telephone pole, Thumbilla - 0875276' ]

const greet = ['Hello', 'How are you?', 'It is nice to meet you'];

console.log(greet.join(', '));

// output: 'Hello, How are you?, It is nice to meet you'

const isPalindrome = (word) => word.split('').reverse().join('') === word;

console.log(isPalindrome('civic') ? 'Is a palindrome!' : 'Not a palindrome...');

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
  for(const row of csv.split('\n')) {
    output.push(row.split(', '))
  }
  return output;
};

console.log(csvArray(users));
console.table(csvArray(users));

/*
output:

[
  [ '' ],
  [ 'id,first_name,last_name,phone_number,gender' ],
  [ '1,Sun,Sunlight,098765,Male' ],
  [ '2,Moon,MoonLight,98765,Male' ],
  [ '3,Plant,Photosyntics,87654,Female' ],
  [ '4,Air,Water,765432,Female' ],
  [ '5,North,South,7654321,Male' ],
  [ '' ],
  [ '' ]
]

*/