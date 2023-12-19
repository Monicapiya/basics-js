import express from 'express';


const app = express();
const PORT = 3000;

app.get('/', (req, res) => {

  const name = req.query.name || 'Mahi';
  const greeting = req.query.greeting || 'Good Morning';
  const output = `${greeting}, ${name}!`;

  res.send(output)
});


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))