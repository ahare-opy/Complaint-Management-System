const express = require('express');
const authController = require('../controller/authController');
const userController = require('../controller/userController');

const router = express.Router();

router.route('/me').get(authController.protect, userController.viewMe);

module.exports = router;
