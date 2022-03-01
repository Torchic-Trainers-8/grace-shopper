'use strict'

const {db, models: {User} } = require('../server/db');
import Products from '../server/db/models/Products';

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log('db synced!');
  const products = await Promise.all([
    Products.create({
      id: 1,
      title: 'Beach Bum',
    },
    {
      id: 2,
      title: 'Bikini Bottom',
    },
    {
      id: 3,
      title: 'Blackberry Smash',
    },{
      id: 4,
      title: 'Blood Orange Martini',
    },{
      id: 5,
      title: 'Blood Orange Tea',
    },{
      id: 6,
      title: 'Blue Velvet',
    },{
      id: 7,
      title: 'Body Electric',
    },{
      id: 8,
      title: 'Born to Die',
    })
  ]);

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'user1', password: '123' }),
    User.create({ username: 'user2', password: '123' }),
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
  // return {
  //   users: {
  //     cody: users[0],
  //     murphy: users[1]
  //   }
  // }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
