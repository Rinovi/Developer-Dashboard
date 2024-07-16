const User = require("./user")
const Post = require("./post")
const Comment = require("./comment")

Post.belongsTo(User, {
    foreignKey: "postAuthor"
})
// post have many comments, comment belong to

module.exports = {
    User,
    Post,
    Comment
}