/*
An object’s properties can be accessed in multiple ways. You’ve already used the dot and bracket notation. Let’s check out three more ways to access properties and values.
 
Specifically we’ll investigate the use of Object.keys() which produces an array of property names, Object.values() which produces an array of values and Object.entries() which produces an array of arrays with key-values as the first and second element.

*/

const book = {
  isbn: '0-671-00410-7',
  title: 'Contact',
  author: 'Carl Sagan',
  publisher: 'Pocket Books',
};

const findKey = (val, obj) => Object.keys(obj).includes(val);
console.log(`ISBN: ${findKey('isbn', book) ? 'Yes' : 'No'}`);

const findValue = (val, obj) => Object.values(obj).includes(val);
console.log(
  `Did Carl Sagan write the book? ${
    findValue('Carl Sagan', book) ? 'Yes' : 'No'
  }`
);

for (const [key, value] of Object.entries(book)) {
  console.log(`${key}: ${value}`);
}

/*
Output:

ISBN: Yes
Did Carl Sagan write the book? Yes
isbn: 0-671-00410-7
title: Contact
author: Carl Sagan
publisher: Pocket Books

*/