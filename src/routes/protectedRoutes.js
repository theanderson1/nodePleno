const express = require('express');
const authMiddleware = require('../auth/authMiddleware');

const router = express.Router();

router.get('/protected', authMiddleware, (req, res) => {
  res.status(200).json({ message: 'Acesso autorizado!' });
});

module.exports = router;
