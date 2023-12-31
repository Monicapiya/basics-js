/*
The Date object in JavaScript offers a range of built-in getter and setter methods which are used to set and extract various parts of a given Date object.

*/


const date = new Date(2020, 2, 20);

date.setHours(15);
date.setMinutes(35);
date.setSeconds(23);
date.setMilliseconds(12);


const getDate = date.getDate();
const getDay = date.getDay();
const getMonth = date.getMonth();
const getFullYear = date.getFullYear();

const getHours = date.getHours();
const getMinutes = date.getMinutes();
const getSeconds = date.getSeconds();
const getMilliseconds = date.getMilliseconds();
const getTime = date.getTime();

console.log(`Date: ${date}`);
console.log(`The date: ${getDate}`);
console.log(`The day: ${getDay}`);
console.log(`The Month: ${getMonth}`);
console.log(`The year: ${getFullYear}`);
console.log(`Time: ${getHours}:${getMinutes}:${getSeconds}:${getMilliseconds}`);
console.log(`Time (ms since Epoch): ${getTime}`);


/*
Output:

Date: Fri Mar 20 2020 15:35:23 GMT+0000 (Coordinated Universal Time)
The date: 20
The day: 5
The Month: 2
The year: 2020
Time: 15:35:23:12
Time (ms since Epoch): 1584718523012


*/

