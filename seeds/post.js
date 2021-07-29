
const { Post } = require('../models');

const postData = [
  {
    name: "Motorcycles",
    description: "Two wheels to freedom",
  },
  {
    name: "Off-Roading",
    description: "The road less traveled",
  },
  {
    name: "Camping",
    description: "Who needs a house when you have the woods",
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;