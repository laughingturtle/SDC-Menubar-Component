const db = require('./config');
const faker = require('faker');

let generateUserData = (start, end) => {
  let result = [];
  for (let i = start; i < end; i++) {
    result.push({
      "user_id": i,
      "display_name": `${faker.internet.userName()}`,
      "logo": `${faker.image.cats()}`,
      "profile_image_url": `${faker.image.avatar()}`,
      "category": `${faker.random.word()}`,
      "followers": `${Math.floor(Math.random() * 200)}`,
      "following": `${Math.floor(Math.random() * 200)}`
    });
    start++
  }
  return result;
}

module.exports = () => {
  db.knex.batchInsert('users', generateUserData(1, 1000001), 1000)
  .then((data) => {return console.log('Done!')});
  return 'PG seed script called';
}


require('make-runnable/custom')({
  printOutputFrame: false
})