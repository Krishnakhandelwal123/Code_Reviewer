const express = require('express');
const { signup, login, logout, checkAuth, googleLogin, forgotPassword, resetPassword } = require('../controllers/authController.js');
const { protectRoute } = require('../middlewares/authMiddleware.js');

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/google", googleLogin);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

router.get("/check", protectRoute, checkAuth);

module.exports = router;
  