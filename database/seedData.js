const faker = require('faker');
const db = require('./index.js');

let userDataGenerator = function () {
  let userData = [
    ['A_Seagull', 'https://static1.squarespace.com/static/5922f5a8be659438f097a6d8/t/5c438f7d898583fc9a7e872a/1547931522209/128.png?format=300w', 'https://static-cdn.jtvnw.net/jtv_user_pictures/da9d954d-8759-4325-a1ca-46d58c43c93d-profile_banner-480.png', 'Dark Souls III', '906030', '194']
  ];

  for (let i = 0; i < 10; i++) {
    let user = faker.fake("{{internet.userName}}, {{image.avatar}}, {{image.image}}, {{commerce.department}}, {{random.number}}, {{random.number}}");
    user.trim();
    userData.push(user.split(','));
  }

  let results = userData.map(arr => {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) obj['display_name'] = arr[0];
      if (i === 1) obj['logo'] = arr[1];
      if (i === 2) obj['profile_image'] = arr[2];
      if (i === 3) obj['category'] = arr[3];
      if (i === 4) obj['followers'] = Number(arr[4]);
      if (i === 5) obj['followings'] = Number(arr[5]);
    }
    return obj
  });

  return results;
};

const insertDataToDatabase = function () {
  console.log('starting records')
  for (var i = 0; i < 10; i++) {
    let values = userDataGenerator();
    let sql = `INSERT INTO users (display_name, logo, profile_image_url, category, followers, following) VALUES ('${values[i].display_name}', '${values[i].logo}', '${values[i].profile_image}', '${values[i].category}', ${values[i].followers}, ${values[i].followings}) `;
    db.connection.query(sql, function (err) {
      if (err) {
        console.log(err);
      }
    });
  }
  console.log('Records inserted');
}

  insertDataToDatabase();
