const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Route = require('./Route');

const Favorite = sequelize.define('Favorite', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
  routeId: {
    type: DataTypes.INTEGER,
    references: {
      model: Route,
      key: 'id',
    },
  },
}, {
  timestamps: true,
});

Favorite.belongsTo(User, { foreignKey: 'userId' });
Favorite.belongsTo(Route, { foreignKey: 'routeId' });
User.hasMany(Favorite, { foreignKey: 'userId' });
Route.hasMany(Favorite, { foreignKey: 'routeId' });

module.exports = Favorite;