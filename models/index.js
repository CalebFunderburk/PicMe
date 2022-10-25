// Models
const User = require('./User')
const Message = require('./Message')
const Follow = require('./Follow')

// Associations
/*User.hasMany(Message, {
    foreignKey: 'user_id'
})

Message.belongsTo(User, {
    foreignKey: 'message_id'
})

Follow.belongsTo(Message, {
    foreignKey: 'message_id',
    onDelete: 'SET NULL'
})

Message.hasMany(Follow, {
    foreignKey: 'follow_id'
})*/

module.exports = { User, Message, Follow };