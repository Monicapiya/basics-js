/*
There are multiple ways to format date and time in JavaScript. But the real fun is in building a function that lets you customize the way date is formatted. One of the easiest ways to do this is to use the toDateString() and toTimeString() methods, extracting the various components of date and time and then using these tokens to format the date string as needed.

*/


const date = new Date(2021, 6, 21, 22, 10, 0);

const formatDate = (dateObj, str) => {
    const [day, month, date, year] = dateObj.toDateString().split(/\s/);
    const [hour, minutes, ...rest] = dateObj.toTimeString().split(':');
    const [seconds] = rest[0].split(/\s/g);
    const formattedDate = str
       .replaceAll('d', date)
       .replaceAll('DD', day)
       .replaceAll('MM', month)
       .replaceAll('YYYY', year)
       .replaceAll('hh', hour)
       .replaceAll('mm', minutes)
       .replaceAll('ss', seconds);
   
    return formattedDate;
  };

console.log(
  `21st june, 2021 can be formatted as ${formatDate(
    date,
    "DD, d-MM-YYYY at hh:mm:ss"
  )}`
);

/*
Output:

21st June, 2021 can be formatted as Wed, 21-Jul-2021 at 22:10:00

*/

