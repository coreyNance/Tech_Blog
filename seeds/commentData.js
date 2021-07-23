
const { Comment } = require('../models');

const commentData = [
    {
        comment: "This is the first comment created",
        blogpost_id: 3,
        user_id: 1
    },
    {
        comment: "This is the second comment created",
        blogpost_id: 1,
        user_id: 4
    },
    {
        comment: "This is the third comment created",
        blogpost_id: 4,
        user_id: 2
    },
    {
        comment: "This is the fourth comment created",
        blogpost_id: 4,
        user_id: 3
    },
    {
        comment: "This is the fifth comment created",
        blogpost_id: 5,
        user_id: 5
    },
    {
        comment: "This is the sixth comment created",
        blogpost_id: 5,
        user_id: 4
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;