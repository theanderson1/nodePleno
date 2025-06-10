const express = require('express');
const router = express.Router();
const { testAsync } = require('../controllers/testController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/test-async', authMiddleware, testAsync);

module.exports = router;
