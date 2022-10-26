// Dependencies
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

// Class definition
class Follow extends Model {}

// Model parameters
Follow.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER, 
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    recipient: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'follow'
  }
);

module.exports = Follow;