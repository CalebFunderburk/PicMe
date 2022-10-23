const User = require('./User')
const Post = require('./Post')
const Category = require('./Category')

// User.hasMany(Post, {
//     foreignKey: 'post_id',
//     onDelete: 'SET NULL'
// })

// Post.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'SET NULL'
// })

// Category.belongsTo(Post, {
//     foreignKey: 'post_id',
//     onDelete: 'SET NULL'
// })

// Post.hasMany(Category, {
//     foreignKey: 'category_id',
//     onDelete: 'SET NULL'
// })

// Category.belongsToMany(Post, {
//     through: Category,
//     as: 'catgories',
//     foreignKey: 'category_id',
//     onDelete: 'SET NULL' 
// })

module.exports = {User, Post, Category };