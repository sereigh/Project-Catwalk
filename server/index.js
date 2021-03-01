const express = require('express');
const helpers = require('./helpers');
const path = require('path');
const app = express();
const port = 3000;

app.use('/static', express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});