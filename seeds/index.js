const sequelize = require('../config/connection');
const { User, Favorites, Project } = require('../models');

const UserData = require('./UserData.json');
const favoritesData = require('./favoritesData.json');
const projectsData = require('./projectsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(UserData);
  const favorites = await Favorites.bulkCreate(favoritesData);
  const projects = await Project.bulkCreate(projectsData);  

  // const users = await userData.bulkCreate(UserData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  // for (const Favorites of favoritesData) {
  //   await Favorites.create({
  //     ...Favorites,
  //     id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }

  process.exit(0);
};

seedDatabase();