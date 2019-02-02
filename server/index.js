const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require('../database');
const port = 3000;

//process.env.PORT ||

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../public'));


// app.get('/username', function (req, res) {
//   database.connection.query('SELECT * FROM users', (error, results, fields) => {
//     if (error) {
//       console.log('error')
//     } else {
//       res.json(results);
//     }
//   })
// });





app.listen(port, () => console.log(`App listening on port ${port}!`))
