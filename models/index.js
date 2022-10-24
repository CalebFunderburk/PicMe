// Models
const User = require('./User')
const Post = require('./Post')
const Category = require('./Category')

// Associations
User.hasMany(Post, {
    foreignKey: 'user_id'
})

Post.belongsTo(User, {
    foreignKey: 'post_id'
})

Category.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
})

Post.hasMany(Category, {
    foreignKey: 'category_id'
})

module.exports = { User, Post, Category };