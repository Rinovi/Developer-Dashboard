const router = require("express").Router();
const { User, Post } = require("../../models/index");

router.get("/", async (req, res) => {
    const postData = await Post.findAll({
       
        include: User
    })
        const posts = postData.map(post => post.get({plain: true}))
        console.log(posts)
        res.render("homepage", {
            logged_in: req.session.loggedIn,
            posts
        })
})

router.get("/profile", async (req, res) => {
    console.log(req.session.user_id)
if (req.session.loggedIn) {
    const postData = await Post.findAll({
        where: {
            postAuthor: req.session.user_id
        },
        include: User
    })
    if (postData) {
        const posts = postData.map(post => post.get({plain: true}))
        console.log(posts)
        res.render("profile", {
            logged_in: req.session.loggedIn,
            posts
        })
    } else {
        res.render("profile", {
            logged_in: req.session.loggedIn,
            posts: []
        })
    }
   
  
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

router.get("/post-view/:id", async (req, res) => {
    console.log(req.params.id);
    // try {
        const postData = await Post.findByPk( req.params.id, {
            include: [{model: User}]
        })
    
        // if(!postData) {
        //     console.log("No post with that id!")
        //     res.render('homepage', {
        //         logged_in: req.session.loggedIn
        //     })
        // } else {
            const post = postData.get({plain: true})
            console.log(post)
            res.render("comment", {
                logged_in: req.session.loggedIn,
                post
            })
        // }
    
    // } catch(err) {
    //     console.log(err);

    //     res.render('homepage', {
    //         logged_in: req.session.loggedIn
    //     })
    // }
})

module.exports = router;