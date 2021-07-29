const { User } = require('../models');

const userData = [
  {
    name: "Matthew",
    email: "Matthew@gmail.com",
    password: "freeloader1"
  },
  {
    name: "Matt",
    email: "matt@gmail.com",
    password: "freeloader1"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
