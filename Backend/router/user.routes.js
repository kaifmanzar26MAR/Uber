const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile, userLogout } = require('../controllers/user.controller');
const { authUser } = require('../middleware/auth.middleware');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', authUser, getUserProfile);
router.get('/logout', authUser, userLogout);

module.exports = router;    