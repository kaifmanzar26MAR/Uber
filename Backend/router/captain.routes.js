const express = require('express');
const { registerCaptain } = require('../controllers/captain.controllers');
const router = express.Router();

router.post('/register', registerCaptain);

module.exports = router;