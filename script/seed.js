'use strict';

const {
  db,
  models: {
    Product,
    Tag,
    User,
    PaymentInfo,
    Wishlist,
    Address,
    PurchaseHistory,
    Cart,
  },
} = require('../server/db/index');
const fs = require('fs');
const fastcsv = require('fast-csv');
const { Client } = require('pg');


let stream = fs.createReadStream('data/Yarn-Seed-File.csv');
let csvData = [];
let csvStream = fastcsv
  .parse()
  .on('data', function (data) {
    csvData.push(data);
  })
  .on('end', function () {
    // remove the first line: header
    csvData.shift();
    // connect to the PostgreSQL database
    // save csvData
    let client;
    if (process.env.DATABASE_URL) {
      client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false
        }
      });
    } else {
      client = new Client({
        connectionString: 'postgres://localhost:5432/grace-shopper'
      });
    }
    const query =
      'INSERT INTO PRODUCTS (id, title, description, image, price, quantity, weight, color) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';
    client.connect((error, client, next) => {
      if (error) throw error;
      try {
        csvData.forEach((row) => {
          client.query(query, row, (error) => {
            if (error) {
              console.log(error.stack);
            };
          });
        });
      } finally {
        client.end();
      };
    });
  });

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');
  stream.pipe(csvStream);

  const users = await Promise.all([
    User.create({ username: 'user1@gmail.com', password: '123', role: 'Admin' }),
    User.create({
      username: 'user2@gmail.com',
      password: '123',
      role: 'Customer',
    }),
  ]);


  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
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
