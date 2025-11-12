const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Route = require('./Route');

const Bus = sequelize.define('Bus', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  busNumber: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  busType: {
    type: DataTypes.ENUM('AC', 'Non-AC', 'Green'),
    allowNull: false,
  },
  driverName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  driverPhone: {
    type: DataTypes.STRING,
  },
  routeId: {
    type: DataTypes.INTEGER,
    references: {
      model: Route,
      key: 'id',
    },
  },
  departureTime: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  arrivalTime: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fare: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  totalSeats: {
    type: DataTypes.INTEGER,
    defaultValue: 50,
  },
  availableSeats: {
    type: DataTypes.INTEGER,
    defaultValue: 50,
  },
}, {
  timestamps: true,
});

Bus.belongsTo(Route, { foreignKey: 'routeId' });
Route.hasMany(Bus, { foreignKey: 'routeId' });

module.exports = Bus;