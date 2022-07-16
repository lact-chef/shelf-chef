const User = require('./User');
const Project = require('./Project');
const Favorites = require('./Favorites');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project, Favorites };
