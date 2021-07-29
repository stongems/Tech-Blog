
const seedComments= require('./comment');
const seedPosts = require('./post');
const seedUsers = require('./user');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- TAGS SEEDED -----\n');
  
  await seedPosts();
  console.log('\n----- PRODUCTS SEEDED -----\n');
  
  await seedComments();
  console.log('\n----- CATEGORIES SEEDED -----\n');


  process.exit(0);
};

seedAll();