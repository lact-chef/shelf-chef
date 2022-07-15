const userData = require('./userData');
const Project = require('./Project');

userData.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(userData, {
  foreignKey: 'user_id'
});

module.exports = { userData, Project };
