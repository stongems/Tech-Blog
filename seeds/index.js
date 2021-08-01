
const seedComments= require('./comment');
const seedPosts = require('./post');
const seedUsers = require('./user');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USER SEEDED -----\n');
  
  await seedPosts();
  console.log('\n----- POST SEEDED -----\n');
  
  await seedComments();
  console.log('\n----- COMMENT SEEDED -----\n');


  process.exit(0);
};

seedAll();