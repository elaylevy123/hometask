const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const auth = require('../middleware/auth');

router.post('/category', auth, categoryController.addCategory);
router.get('/category/:id', auth, categoryController.getCategoryById);

module.exports = router;
