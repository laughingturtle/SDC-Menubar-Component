//const db = require('./config');
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
  const knex = require('knex')({
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'quatro',
      password: 'quatro',
      database: 'menubarcomponent'
    }
  });
  console.log(`---------------------\nPG seed script called\n---------------------\n`);
  console.log('Connected to PostgreSQL');
  console.log("Seeding databse (this may take a while) =>");
  console.log(`Now writing rows to 'users' table  . . .`);
  knex.batchInsert('users', generateUserData(1, 1000001), 1000)
    .then((data) => console.log('1 million records written . . .'))
    .then((data) => knex.batchInsert('users', generateUserData(1000001, 2000001), 1000))
    .then((data) => console.log('2 million records written . . .'))
    .then((data) => knex.batchInsert('users', generateUserData(2000001, 3000001), 1000))
    .then((data) => console.log('3 million records written . . .'))
    .then((data) => knex.batchInsert('users', generateUserData(3000001, 4000001), 1000))
    .then((data) => console.log('4 million records written . . .'))
    .then((data) => knex.batchInsert('users', generateUserData(4000001, 5000001), 1000))
    .then((data) => console.log('5 million records written . . .'))
    .then((data) => knex.batchInsert('users', generateUserData(5000001, 6000001), 1000))
    .then((data) => console.log('6 million records written . . .'))
    .then((data) => knex.batchInsert('users', generateUserData(6000001, 7000001), 1000))
    .then((data) => console.log('7 million records written . . .'))
    .then((data) => knex.batchInsert('users', generateUserData(7000001, 8000001), 1000))
    .then((data) => console.log('8 million records written . . .'))
    .then((data) => knex.batchInsert('users', generateUserData(8000001, 9000001), 1000))
    .then((data) => console.log('9 million records written . . .'))
    .then((data) => knex.batchInsert('users', generateUserData(9000001, 10000001), 1000))
    .then((data) => console.log('10 million records written . . .'))
    .then((data) => console.log('Done!'))
    .then((data) => knex.destroy());

  return ``;
};


require('make-runnable/custom')({
  printOutputFrame: false
});