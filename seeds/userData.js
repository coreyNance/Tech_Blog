
const { User } = require('../models');
const bcrypt = require('bcrypt');

const userData = [
  {
    name: "Eric",
    email: "Eric20@aol.com",
    password: "password12345"
  },
  {
    name: "Sal",
    email: "sal@hotmail.com",
    password: "password12345"
  },
  {
    name: "Lernantino",
    email: "lernantino@gmail.com",
    password: "password12345"
  },
  {
    name: "Amiko",
    email: "amiko2k20@aol.com",
    password: "password12345"
  },
  {
      name: "Corey",
      email: "corey345@aol.com",
      password: "password12345"
  },
  {
      name: "Susan",
      email: "susan2k20@aol.com",
      password: "password12345"
  },
  {
      name: "Olivia",
      email: "olivia2k20@aol.com",
      password: "password12345"
  },
 
    
];

async function pwHash(userArray) {
  for (const user of userArray) {
    user.password = await bcrypt.hash(user.password, 10)
  }
}

pwHash(userData)

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;




