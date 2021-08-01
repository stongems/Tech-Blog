  
const { Comment } = require('../models');
const commentData = [
  {
    body: 'First',
    Post_id: 1,
    user_id: 2
  },
  {
    body: 'Second',
    Post_id: 2,
    user_id: 1
  },
  {
    body: 'Third',
    Post_id: 3,
    user_id: 2
  },
  {
    body: 'Fourth',
    Post_id: 1,
    user_id: 2
  },
  {
    body: 'Fifth',
    Post_id: 3,
    user_id: 1
  },
];
const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;