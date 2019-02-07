const MongoClient = require('mongodb').MongoClient;
const faker = require('faker');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url, { useNewUrlParser: true });
const dbName = 'menu-bar-data';
const usersCollection = 'users';
const followersCollection = 'followers';

let generateUserData = (start, end) => {
  let result = [];
  for (let i = start; i < end; i++) {
    result.push({
      insertOne: {
        "document": {
          "_id": i,
          "user_id": i,
          "display_name": `${faker.internet.userName()}`,
          "logo": `${faker.image.cats()}`,
          "profile_image_url": `${faker.image.avatar()}`,
          "category": `${faker.random.word()}`,
          "followers": `${Math.floor(Math.random() * 200)}`,
          "following": `${Math.floor(Math.random() * 200)}`
        }
      }
    }
    );
    start++
  }
  return result;
}

let generateFollowerData = (start, end) => {
  let result = [];
  for (let i = start; i < end; i++) {
    result.push({
      insertOne: {
        "document": {
          "_id": i,
          "folower_id": i,
          "display_name": `${faker.internet.userName()}`,
          "logo": `${faker.image.cats()}`,
          "category": `${faker.random.word()}`,
        }
      }
    }
    );
    start++
  }
  return result;
}

module.exports = () => {
  client.connect(function (err) {
    if (err) { console.log(err) }
    const db = client.db(dbName);
    const users = db.collection(usersCollection);
    const followers = db.collection(followersCollection);
    console.log("Connected to MongoDB");
    console.log("Seeding databse (this may take a while) =>");
    console.log(`Now writing 'users' collection . . .`);
    users.bulkWrite(generateUserData(1, 1000001))
      .then((data) => { return console.log("1 million records written . . .") })
      .then((data) => { return users.bulkWrite(generateUserData(1000001, 2000001)) })
      .then((data) => { return console.log("2 million records written . . .") })
      .then((data) => { return users.bulkWrite(generateUserData(2000001, 3000001)) })
      .then((data) => { return console.log("3 million records written . . .") })
      .then((data) => { return users.bulkWrite(generateUserData(3000001, 4000001)) })
      .then((data) => { return console.log("4 million records written . . .") })
      .then((data) => { return users.bulkWrite(generateUserData(4000001, 5000001)) })
      .then((data) => { return console.log("5 million records written . . .") })
      .then((data) => { return users.bulkWrite(generateUserData(5000001, 6000001)) })
      .then((data) => { return console.log("6 million records written . . .") })
      .then((data) => { return users.bulkWrite(generateUserData(6000001, 7000001)) })
      .then((data) => { return console.log("7 million records written . . .") })
      .then((data) => { return users.bulkWrite(generateUserData(7000001, 8000001)) })
      .then((data) => { return console.log("8 million records written . . .") })
      .then((data) => { return users.bulkWrite(generateUserData(8000001, 9000001)) })
      .then((data) => { return console.log("9 million records written . . .") })
      .then((data) => { return users.bulkWrite(generateUserData(9000001, 10000001)) })
      .then((data) => { return console.log("10 million records written . . .") })
      .then((data) => { console.log(`'users' collection done`) })
      .then((data) => { console.log(`Now writing 'followers' collection . . .`) })
      .then((data) => { return followers.bulkWrite(generateFollowerData(1, 1000001)) })
      .then((data) => { return console.log("1 million records written . . .") })
      .then((data) => { return followers.bulkWrite(generateFollowerData(1000001, 2000001)) })
      .then((data) => { return console.log("2 million records written . . .") })
      .then((data) => { return followers.bulkWrite(generateFollowerData(2000001, 3000001)) })
      .then((data) => { return console.log("3 million records written . . .") })
      .then((data) => { return followers.bulkWrite(generateFollowerData(3000001, 4000001)) })
      .then((data) => { return console.log("4 million records written . . .") })
      .then((data) => { return followers.bulkWrite(generateFollowerData(4000001, 5000001)) })
      .then((data) => { return console.log("5 million records written . . .") })
      .then((data) => { return followers.bulkWrite(generateFollowerData(5000001, 6000001)) })
      .then((data) => { return console.log("6 million records written . . .") })
      .then((data) => { return followers.bulkWrite(generateFollowerData(6000001, 7000001)) })
      .then((data) => { return console.log("7 million records written . . .") })
      .then((data) => { return followers.bulkWrite(generateFollowerData(7000001, 8000001)) })
      .then((data) => { return console.log("8 million records written . . .") })
      .then((data) => { return followers.bulkWrite(generateFollowerData(8000001, 9000001)) })
      .then((data) => { return console.log("9 million records written . . .") })
      .then((data) => { return followers.bulkWrite(generateFollowerData(9000001, 10000001)) })
      .then((data) => { return console.log("10 million records written . . .") })
      .then((data) => { console.log(`'followers' collection done`) })
      .then((data) => { console.log(`Database is seeded.`) })
      .then((data) => { client.close(); });
  });
  return `--------------------------\nMongoDB seed script called\n--------------------------\n`;
}

require('make-runnable/custom')({
  printOutputFrame: false
})