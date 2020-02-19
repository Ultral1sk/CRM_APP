const router = require('express').Router();
const auth = require('../controller/auth')


router.post('/register', auth.postRegister);
router.post('/login'   ,   auth.postLogin);
module.exports = router;