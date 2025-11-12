const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Feedback = sequelize.define('Feedback', {
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
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  timestamps: true,
});

Feedback.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Feedback, { foreignKey: 'userId' });

module.exports = Feedback;