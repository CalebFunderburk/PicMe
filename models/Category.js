// Dependencies
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

// Class definition
class Category extends Model {}

// Model parameters
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    category_name: {
      type: DataTypes.STRING(25),
      allowNull: false,
      validate: {
        isNumeric: false
      }
    }, 
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'post',
        key: 'id'
      }
    },
  },
  {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'category'
  }
);

module.exports = Category;