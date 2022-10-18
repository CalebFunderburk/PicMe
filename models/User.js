const { Model, DataTypes } = require('sequelize');

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
        },
        username: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        }
    }
)