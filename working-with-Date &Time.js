/*
JavaScript offers a built-in Date object which lets us parse and work with Date and Time which is required in most web applications. The Date() constructor function can be used to create a Date object after which prototype methods may be used as necessary.

*/

const waltDisneyBirthday = new Date('5 December, 1901 00:35:00');

const yearsTo = (date) => {
    const diff = (date - Date.now()) / 31536000000;
    return Math.abs(diff.toPrecision(4));
  };

console.log(
    `Walt Disney was born on ${waltDisneyBirthday.toLocaleString('en-IN')}. That was ${yearsTo(waltDisneyBirthday)} years ago!`
  );


  /*
Output:

Walt Disney was born on 5/12/1901, 12:35:00 am. That was 122.2 years ago!

*/


