const express = require('express');
const router = express.Router();
const { testAsync } = require('../controllers/testController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/test-async', authMiddleware, testAsync);

router.get('/async-test', async (req, res) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    res.json({ message: 'Resposta após 1.5s' });
  });

module.exports = router;
