const router = require('express').Router();
const apiRoutes = require('./api/user-routes');
const renderRoutes = require("./render-routes")

router.use('/api', apiRoutes);
router.use('/', renderRoutes);

module.exports = router;