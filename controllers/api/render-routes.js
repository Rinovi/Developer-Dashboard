const router = require("express").Router();
const { User, Post } = require("../../models/index");

router.get("/", (req, res) => {
    res.render("homepage", {
        layout: "main",
        logged_in: req.session.loggedIn
    })
})

router.get("/profile", async (req, res) => {
    console.log(req.session.user_id)
if (req.session.loggedIn) {
    // const postData = await Post.findAll({
    //     where: {
    //         postAuthor: req.session.user_id
    //     }
    // })
    // if (postData) {
    //     const posts = postData.map(post => post.get({plain: true}))
    //     console.log(posts)
    //     res.render("profile", {
    //         logged_in: req.session.loggedIn,
    //         posts
    //     })
    // } else {
        res.render("profile", {
            logged_in: req.session.loggedIn,
            posts: []
        })
    // }
   
  
} else {
    res.render("login")
}
  
})
router.get("/login", (req, res) => {
    if (req.session.loggedIn == true) {
        res.redirect("/")
    } else {
        res.render("login", {
            layout: "account",
        })
    }
})

router.get("/signup", (req, res) => {
    if (req.session.loggedIn == true) {
        res.redirect("/")
    } else {
        res.render("signup", {
            layout: "account",
        })
    }
})

module.exports = router;