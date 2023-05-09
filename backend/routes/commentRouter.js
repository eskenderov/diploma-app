const commentController = require('../controller/commentController');
const router = require('express').Router();

router.get('/allComment', commentController.getAllComment);
router.post('/addComment', commentController.addComment);

module.exports = router;
