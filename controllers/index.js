const router = require('express').Router();
const apiRoutes = require('./api/user-routes');
const renderRoutes = require("./api/render-routes")
const postRoutes = require("./api/post-routes")

router.use('/api', apiRoutes);
router.use('/post', postRoutes);
router.use('/', renderRoutes);

module.exports = router;