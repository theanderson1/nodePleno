const express = require('express');
const router = express.Router();
const { loginHandler, profileHandler } = require('./authController');
const authMiddleware = require('./authMiddleware');

router.post('/login', loginHandler);
router.get('/protected', authMiddleware, profileHandler);

module.exports = router;