const express = require('express');
const _ = require('lodash');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const name = req.query.name || 'Panther';
  const shout = _.upperCase(name);
  res.send(`<h1>Hello, ${shout}!</h1>`);
});

app.get('/sum', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.json({ sum: a + b });
});

app.listen(PORT, () => {
  console.log(`snyk-demo-node listening on port ${PORT}`);
});