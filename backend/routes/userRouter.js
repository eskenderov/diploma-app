const {
  loginUser,
  editSafeUser,
  editUnSafeUser,
} = require('../controller/userController');

const router = require('express').Router();

router.post('/login', loginUser);
router.post('/edit/safe', editSafeUser);
router.post('/edit/unsafe', editUnSafeUser);
module.exports = router;
