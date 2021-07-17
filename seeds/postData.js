  
const { BlogPost } = require('../models');

const postData = [
    {
        title: 'This is the first post',
        content: 'This is the first post that was created to test out how this works.',
        user_id: 1,
    },
    {
        title: 'This is the second post',
        content: 'This is the second post that was created to test out how this works.',
        user_id: 2,
    },
    {
        title: 'This is the third post',
        content: 'This is the third post that was created to test out how this works.',
        user_id: 2,
    },
    {
        title: 'This is the fourth post',
        content: 'This is the fourth post that was created to test out how this works.',
        user_id: 3,
    },
    {
        title: 'This is the fifth post',
        content: 'This is the fifth post that was created to test out how this works.',
        user_id: 4,
    },
    {
        title: 'This is the sixth post',
        content: 'This is the sixth post that was created to test out how this works.',
        user_id: 5,
    },
]

const seedPosts = () => BlogPost.bulkCreate(postData);

module.exports = seedPosts;