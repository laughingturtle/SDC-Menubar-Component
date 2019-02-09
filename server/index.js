const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
//const database = require('../database');
//const pgClient = require('../PostgreSQL/config');
const mongo = require('../MongoDB/index');
const port = 3015;

//process.env.PORT ||

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../public'));

/* Use with MongoDB requests */
app.get('/username', (req, res) => {
  mongo.client.connect((err) => {
    if (err) { console.log(err) } else { console.log('Mongo connected') }
    const db = mongo.client.db(`menu-bar-data`);
    const users = db.collection(`users`);

    new Promise((resolve, reject) => {
      const options = { "limit": 100, "skip": 9999900 };
      users.find({}, options).toArray((err, docs) => {
        if (err) { console.log(err) }
        console.log(docs);
        resolve(docs);
      })
    }).then((data) => res.send(JSON.stringify(data)));

  })
});

/* Use with PostgreSQL requests */
// app.get('/username', (req, res) => {
//   pgClient.knex('users').whereBetween('user_id', [9999900, 10000000])
//   .then((data) => res.send(data));
// });


app.listen(port, () => console.log(`App listening on port ${port}!`))


// app.get('/username', function (req, res) {
//   database.connection.query('SELECT * FROM users', (error, results, fields) => {
//     if (error) {
//       console.log('error')
//     } else {
//       res.json(results);
//     }
//   })
// });