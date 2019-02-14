const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3015 || process.env.PORT;
const mongo = require('../MongoDB/index');
const db = mongo.client.db(`menu-bar-data`);
const users = db.collection(`users`);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../public'));

app.get('/username', (req, res) => {
  mongo.client.connect((err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('GET API called')
    }

    new Promise((resolve, reject) => {
      users.find({}, { "limit": 100, "skip": 9999900 })
      .toArray((err, docs) => {
        if (err) { console.log(err); res.status(201); }
        resolve(docs);
      })
    })
    .then((data) => res.status(200).send(JSON.stringify(data)))
    .then(() => db.close(console.log('GET API complete')));
  })
});

app.listen(port, () => console.log(`App listening on port ${port}!`));