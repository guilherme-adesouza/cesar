const Config = require('./utils/config');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

var DBMigrate = require('db-migrate');
var dbmCesar = DBMigrate.getInstance(true);
var dbStartConfig = {
  dev: {
    user: Config.DB_USER,
    host: Config.HOST,
    database: Config.DB_START_NAME,
    password: Config.DB_PASSWORD,
    port: Config.DB_PORT,
    driver: 'pg'
  }
};
var dbmStart = DBMigrate.getInstance(true, { env: 'dev', config: dbStartConfig });

const port = Config.PORT;

app.use('/uploads', express.static(Config.UPLOAD_DIR));
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
require('./controller/mail')(app);
require('./utils/upload')(app);

app.get('/', (req, res) => {
  res.send('Cesar server running here!');
});

app.get('/api/test', (req, res) => {
  res.send({test: 'I am working! Awesome!' });
});

dbmStart.createDatabase("cesar")
.then(function() {
  dbmCesar.up().then(function() {
    app.listen(port, () => {
      console.info(`Listening on port ${port}...`);
      console.info(`Cesar Server started!`)
    })
  });
})
.catch(function(e) {
  dbmCesar.up().then(function() {
    app.listen(port, () => {
      console.info(`Listening on port ${port}...`);
      console.info(`Cesar Server started!`)
    })
  });
});
