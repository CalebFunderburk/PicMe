// Dependencies
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

// Class definition
class Message extends Model {}

// Model parameters
Message.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        message: {
            type: DataTypes.STRING
        },
        sender_id: {
            type: DataTypes.INTEGER,
            allowNull:false,
            reference: {
                model: 'user',
                key: 'id'
            }
        },
        
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'message'
    }
)

module.exports = Message;