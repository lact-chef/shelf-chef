const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class favorites extends Model {}

Project.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tile: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    URL: {
      type: DataTypes.varchar(255),
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'favorites',
  }
);

module.exports = favorites;
