/*
When you have to add days to a given date, the process is as simple as converting the date to a computational value such as in milliseconds, adding the number of days after converting them to milliseconds and using that to generate a new date object which can then be parsed or used whichever way you want.

*/


const date = new Date(2021, 4, 10);

const addDays = (dateObj, days = 0) => {
    const daysToMs = days * 864_00_000;
    return new Date(dateObj.getTime() + daysToMs);
  };

console.log(`International Family Day is on ${addDays(date, 5)}`);

/*
nternational Family Day is on Sat May 15 2021 00:00:00 GMT+0000 (Coordinated Universal Time)


*/

