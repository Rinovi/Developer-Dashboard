const router = require("express").Router();
const { User } = require("../../models/index");

router.get("/", (req, res) => {
    res.render("homepage", {
        layout: "main",
        logged_in: req.session.loggedIn
    })
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