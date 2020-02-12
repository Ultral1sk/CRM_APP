const router = require('express').Router();
const home = require('../controller/home')

router.get('/', home.getHome)

module.exports = router;