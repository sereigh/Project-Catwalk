const path = require('path');

const express = require('express');

const app = express();
const port = 3000;

app.use('/static', express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});