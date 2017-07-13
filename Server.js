// database access file

// dependencies for accessing the postgresql databse
let express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    pg = require('pg'),
    app = express();

const PORT = 3001;

// defines pool properties
let pool = new pg.Pool({
  port: 5432,
  password: 'k2snowboar',
  database: 'peoplegrove',
  host: 'localhost',
  user: 'postgres'
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));

app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// db query add a user
app.post('/api/new-user', (request, response) => {
  let username = request.body.username

  pool.connect((err, db, done) => {
    if(err) {
      return response.status(400).send(err)
    }
    else {
      db.query('INSERT INTO users (username, account_type) VALUES($1, $2)',
        [username, 'user'], (err, table) => {
        done()
        if(err) {
          return response.status(400).send(err)
        } else {
          console.log("Inserted")
          response.status(201).send({message: 'User inserted!'})
        }
      })
    }
  })
})

// db query edit user
app.post('/api/edit-user', (request, response) => {
  let username = request.body.username,
      account = request.body.account

  pool.connect((err, db, done) => {
    if(err) {
      return response.status(400).send(err)
    }
    else {
      db.query('UPDATE users SET account_type = $1 WHERE username = $2',
        [account, username], (err, table) => {
        done()
        if(err) {
          return response.status(400).send(err)
        } else {
          console.log("Inserted")
          response.status(201).send({message: 'User inserted!'})
        }
      })
    }
  })
})

// db query add an activity
app.post('/api/add-activity', (request, response) => {
  let username = request.body.username,
      startTime = new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDate()
        + ' ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds(),
      activity = request.body.activity,
      description = request.body.description

  pool.connect((err, db, done) => {
    if(err) {
      return response.status(400).send(err)
    }
    else {
      db.query('INSERT INTO logs (username, start_time, activity, description, finished) VALUES($1, $2, $3, $4, $5)',
        [username, startTime, activity, description, false], (err, table) => {
        done()
        if(err) {
          return response.status(400).send(err)
        } else {
          console.log("Inserted")
          response.status(201).send({message: 'Activity inserted!'})
        }
      })
    }
  })
})

// db query end an activity
app.post('/api/end-activity', (request, response) => {
  let finishTime = new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDate()
    + ' ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds(),
      activityId = request.body.activity

  console.log(request)
  pool.connect((err, db, done) => {
    if(err) {
      return response.status(400).send(err)
    }
    else {
      db.query('UPDATE logs SET finish_time = $1 WHERE id = $2',
        [finishTime, activityId], (err, table) => {
        done()
        if(err) {
          return response.status(400).send(err)
        } else {
          console.log("Inserted")
          response.status(201).send({message: 'Activity ended!'})
        }
      })
    }
  })
})

// db query edit an activity
app.post('/api/edit-activity', (request, response) => {
  let username = request.body.username,
      activityName = request.body.activity,
      description = request.body.description

  console.log(request)
  pool.connect((err, db, done) => {
    if(err) {
      return response.status(400).send(err)
    }
    else {
      db.query('UPDATE logs SET activity = $1, description = $2 WHERE id = $3',
        [activityName, description, username], (err, table) => {
        done()
        if(err) {
          return response.status(400).send(err)
        } else {
          console.log("Inserted")
          response.status(201).send({message: 'Activity ended!'})
        }
      })
    }
  })
})

app.listen(PORT, () => console.log('Listening on port ' + PORT));
