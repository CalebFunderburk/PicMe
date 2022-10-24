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
<<<<<<< HEAD
=======
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
>>>>>>> e99376de1d8d38292300bbdaff6bf39d5a2160d0
        },
        desc: {
            type: DataTypes.STRING(60)
        },
        image_path: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2]
            }
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2]
            }
        },

        user_id: {
            type: DataTypes.INTEGER,
            allowNull:false,
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