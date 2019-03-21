const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const db = require('./database');

require('dotenv').config();

var DBMigrate = require('db-migrate');
var dbmigrate = DBMigrate.getInstance(true);

const port = process.env.PORT;

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//user requests
require('./user')(app, db);

app.get('/', (req, res) => {
  res.send('Cesar server running here!');
});

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => {
  dbmigrate.up();
  console.log(`Cesar Server started!`)
  console.log(`Listening on port ${port}...`);
});
