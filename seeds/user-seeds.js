const { User, Post } = require("../models");

const userData = [
  {
    username: "jpauley",
    password: "password1",
  },
  {
    username: "matt_l",
    password: "password2",
  },
  {
    username: "al_roker",
    password: "password3",
  },
  {
    username: "hoda_k",
    password: "password4",
  },
  {
    username: "jbush",
    password: "password5",
  },
  {
    username: "sav_guthrie",
    password: "password6",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
