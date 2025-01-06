const express = require('express');
const { registerCaptain, loginCaptain, captainProfile, captainLogout } = require('../controllers/captain.controllers');
const { authCaptain } = require('../middleware/auth.middleware');
const router = express.Router();

router.post('/register', registerCaptain);
router.post('/login',loginCaptain);
router.get('/profile', authCaptain, captainProfile);
router.get('/logout', authCaptain, captainLogout);

module.exports = router;