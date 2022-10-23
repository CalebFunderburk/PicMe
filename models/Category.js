const { Model, DataTypes } = require('sequelize');

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
    },
    category_name: {
      type: DataTypes.STRING,
    }, user_id: {
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
  freezeTableName: true,
  underscored: true,
  modelName: 'category'
  }
);

module.exports = Category;

/*comment just for the push*/