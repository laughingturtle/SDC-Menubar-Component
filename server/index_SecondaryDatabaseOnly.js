const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3020 || process.env.PORT;
const database = require('../database');
const pgClient = require('../PostgreSQL/config');


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../public'));

app.get('/username', (req, res) => {
  pgClient.knex('users').whereBetween('user_id', [9999900, 10000000])
  .then((data) => res.status(200).send(data));
});


app.listen(port, () => console.log(`App listening on port ${port}!`));