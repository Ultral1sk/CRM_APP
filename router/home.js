const router = require('express').Router();

router.get('/', (req, res) => {
      res.json({ message : 'Hello from dashboard/Home page/router'})
    })

module.exports = router;