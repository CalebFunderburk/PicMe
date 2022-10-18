const { Model, DataTypes } = require('sequelize');

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
    },
    category_name: {
      type: DataTypes.STRING,
    }
})