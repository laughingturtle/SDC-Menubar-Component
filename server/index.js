const port = 3015 || process.env.PORT;
const assert = require('assert');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
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
      console.log(err);
      res.status(500).end();
    } else {
      console.log('GET api called')
    }

    new Promise((resolve, reject) => {
      users.find({}, { "limit": 100, "skip": 9999900 })
      .toArray((err, docs) => {
        if (err) {
          console.log(err);
          res.status(500).end();
        } else {
          resolve(docs);
        }
      })
    })
    .then((data) => res.status(200).send(JSON.stringify(data)))
    .then(() => db.close(console.log('GET API complete')));
  })
});

app.post(`/createProfile`, (req, res) => {
  mongo.client.connect((err) => {
    if (err) {
      console.log(err);
      res.status(500).end();
    } else {
      console.log('POST api called')
    }

    new Promise((resolve, reject) => {
      users.insertOne({
        "_id": i,
        "user_id": i,
        "display_name": `${faker.internet.userName()}`,
        "logo": `${randomizer(fakeLogoArray)}`,
        "profile_image_url": `${faker.image.avatar()}`,
        "category": `${faker.random.word()}`,
        "followers": `${Math.floor(Math.random() * 200)}`,
        "following": `${Math.floor(Math.random() * 200)}`
      }, (err, r) => {
        assert.equal(null, err);
        resolve(assert.equal(1, r.insertedCount));
      })
    })
      .then(() => res.status(200))
      .then(() => db.close(console.log('POST API complete')));
  })
})

app.delete(`/deleteProfile`, (req, res) => {

  mongo.client.connect((err) => {
    if (err) {
      console.log(err);
      res.status(500).end();
    } else {
      console.log('DELETE api called')
    }

    new Promise((resolve, reject) => {
      users.deleteOne({ "user_id": i });
      resolve(e);
    })
      .then((e) => {
        console.log(e);
      })
      .then(() => res.status(200))
      .then(() => db.close(console.log('DELETE API complete')));
  })

})

})

app.put(`/updateProfile`, (req, res) => {
  mongo.client.connect((err) => {
    if (err) {
      console.log(err);
      res.status(500).end();
    } else {
      console.log('PUT api called')
    }

    new Promise((resolve, reject) => {
      users.updateOne({ "user_id": i }, { $set: { "display_name": `${faker.internet.userName()}` } });
      resolve(e);
    })
      .then((e) => {
        console.log(e);
      })
      .then(() => res.status(200))
      .then(() => db.close(console.log('PUT API complete')));
  })

})

app.listen(port, () => console.log(`App listening on port ${port}!`));