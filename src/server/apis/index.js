var router = require('express').Router();

router.get('/profile', require('./api-profile-get'));

module.exports = router;