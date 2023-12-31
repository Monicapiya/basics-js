const dates = [
  ['10 Feb, 2021', '1 Mar, 2021'],
  ['25 Dec, 2020', '25 Dec, 1999'],
  ['1 Jan, 2021', '1 Jan, 1954'],
];

const dateDiff = (start, end, format = 'D') => {
    const diff = end - start;
    const suffix = diff <= 0 ? 'elapsed...' : 'left...';
    const days = `${(Math.abs(diff) / 86400000).toPrecision(5)} days`;
    const hours = `${Math.ceil(Math.abs(diff) / 3600000)} hours`;
    const minutes = `${Math.ceil(Math.abs(diff) / 60000)} minutes`;
    const seconds = `${Math.ceil(Math.abs(diff) / 1000)} seconds`;
    switch (format) {
      case 'D': {
        return `${days} ${suffix}`;
      }
      case 'H': {
        return `${hours} ${suffix}`;
      }
      case 'M': {
        return `${minutes} ${suffix}`;
      }
      case 'S': {
        return `${seconds} ${suffix}`;
      }
    }
  };

dates.forEach(([d1, d2]) => {
  const dateD1 = new Date(d1);
  const dateD2 = new Date(d2);
  console.log(
    `Diff between ${d1} and ${d2} is ${dateDiff(dateD1, dateD2, 'D')}`
  );
});


/*
Output:

Diff between 10 Feb, 2021 and 1 Mar, 2021 is 19.000 days left...
Diff between 25 Dec, 2020 and 25 Dec, 1999 is 7671.0 days elapsed...
Diff between 1 Jan, 2021 and 1 Jan, 1954 is 24472 days elapsed...


*/
