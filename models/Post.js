const { Model, DataTypes } = require('sequelize');

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
        },
        post_url: {
            type: DataTypes.STRING
        },
        user_id: {
            type: DataTypes.INTEGER,
            reference: {
                model: 'user',
                key: 'id'
            }
        },
        category_id: {
            type: Datatypes.INTEGER,
            reference: {
                model: 'category',
                key: 'id'
            }
        }
    }
)