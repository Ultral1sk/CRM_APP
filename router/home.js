const router = require('express').Router();
const home = require('../controller/home')
const auth = require('../middleware/checkAuth')


router.get('/', auth.checkAuth, home.getHome)

module.exports = router;