const { loginUser } = require('../controller/userController');

const router = require('express').Router();

router.post('/login', loginUser);
module.exports = router;
