// Dependencies
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

// Class definition
class Post extends Model {}

// Model parameters
Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        desc: {
            type: DataTypes.STRING(60)
        },
        image_path: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            reference: {
                model: 'user',
                key: 'id'
            }
        },
        category_id: {
            type: DataTypes.INTEGER,
            reference: {
                model: 'category',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
)

module.exports = Post;