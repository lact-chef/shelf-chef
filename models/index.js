const User = require('./User');
const Project = require('./Project');
const Favorites = require('./Favorites');

User.hasMany (Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Project.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Favorites, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Favorites.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Project, Favorites };


