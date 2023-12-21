import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const name = req.query.name || 'mahi';
  const greeting = req.query.greeting || '';

  let finalGreeting = 'Good Evening';

  if (
    greeting.toLowerCase() === 'good morning' ||
    greeting.toLowerCase() === 'morning'
  ) {
    finalGreeting = 'Good Morning';
  } else if (
    greeting.toLowerCase() === 'good afternoon' ||
    greeting.toLowerCase() === 'afternoon'
  ) {
    finalGreeting = 'Good Afternoon';
  } else if (
    greeting.toLowerCase() === 'good night' ||
    greeting.toLowerCase() === 'night'
  ) {
    finalGreeting = 'Good Night';
  }

  const output = `${finalGreeting}, ${name.charAt(0).toUpperCase() + name.slice(1)}!`;

  res.send(output);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


/*
 if (
    req.query.morning === 'true' ||
    req.query.afternoon === 'true' ||
    req.query.night === 'true'
  ) {
    greeting = 'Good';
    if (req.query.morning === 'true') {
      greeting += ' Morning';
    }
    if (req.query.afternoon === 'true') {
      greeting += ' Afternoon';
    }
    if (req.query.night === 'true') {
      greeting += ' Night';
    }
  } else {
    greeting = 'Good Evening';
  }
*/
