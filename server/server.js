const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

require('dotenv').config();

var DBMigrate = require('db-migrate');
var dbmigrate = DBMigrate.getInstance(true);

const port = process.env.PORT;

app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//user requests
require('./controller/user')(app);
//basic crud controller
require('./controller/account')(app);
require('./controller/game')(app);
require('./controller/genre')(app);
require('./controller/platform')(app);
require('./controller/player')(app);
require('./controller/race')(app);
require('./controller/raceType')(app);
require('./controller/user')(app);
require('./utils/upload')(app);

app.get('/', (req, res) => {
  res.send('Cesar server running here!');
});

app.get('/api/test', (req, res) => {
  res.send({test: 'I am working! Awesome!' });
});

app.listen(port, () => {
  dbmigrate.up();
  console.log(`Cesar Server started!`)
  console.log(`Listening on port ${port}...`);
});
