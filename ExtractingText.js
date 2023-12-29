/*
When you have to extract portions of a string, you can use the str.substring() method which accepts start and end index numbers which we can actually fetch using the str.search() method.

*/

const str = 'name:James Dean,age:45,profession:Actor,location:Hollywood';

const fullName = str.substring(str.search('name') + 5, str.search('age') - 1);

const profession = str.substring(
    str.search('profession') + 11,
    str.search('location') - 1
  );

console.log(`${fullName} was an ${profession}`);


/*
Output:

James Dean was an Actor


*/

