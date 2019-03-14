const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const db = require('./database');

require('dotenv').config();

const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./user')(app, db);

app.get('/', (req, res) => {
  res.send('Cesar server running here!');
});

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => {
  console.log(`Cesar Server started!`)
  console.log(`Listening on port ${port}...`);
});
