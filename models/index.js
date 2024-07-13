const User = require("./user")
const Post = require("./post")

User.hasMany(Post, {
    foreignKey: "user_id",
    onDelete: "cascade"
})
Post.belongsTo(User, {
    foreignKey: "user_id"
})

module.exports = {
    User,
    Post
}