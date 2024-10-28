const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const auth = require('../middleware/auth');

router.post('/items', auth, itemController.createOrUpdateItem);
router.get('/items', auth, itemController.getAllItems);
router.get('/item/search', auth, itemController.searchItems);
router.get('/item/:id', auth, itemController.getItemById);

module.exports = router;
