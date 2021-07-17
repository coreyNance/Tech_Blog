const seedUsers = require('./userData');
const seedPosts = require('./postData');
const seedComments = require('./commentData');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    await seedPosts();
    console.log('\n----- POSTS SEEDED -----\n');

    await seedComments();
    console.log('\n----- COMMENTS SEEDED -----\n');

    process.exit(0);
};

seedAll();












// const sequelize = require('../config/connection');
// const { User, BlogPost, Comment } = require('../models');

// const userData = require('./userData');
// const postData = require('./postData');
// const commentData = require('./commentData');

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   const users = await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });

//   for (const post of postData) {
//     await BlogPost.create({
//       ...post,
//       user_id: users[Math.floor(Math.random() * users.length)].id,
//     });
//   }

//   for (const comment of commentData) {
//     await Comment.create({
//       ...comment,
//       user_id: users[Math.floor(Math.random() * users.length)].id,
//       blogpost_id: [Math.floor(Math.random() * users.length)].id,
//     });
//   }

//   process.exit(0);
// };

// seedDatabase();
