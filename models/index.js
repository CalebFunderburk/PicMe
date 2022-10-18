const User = require('./User')
const Post = require('./Post')
const Category = require('./Category')

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
})

User.hasMany(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
})

Category.belongsToMany(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
})