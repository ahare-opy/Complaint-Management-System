const express = require('express');
const authController = require('../controller/authController');
const complainController = require('../controller/complainController');
const userController = require('../controller/userController');

const router = express.Router();

router
  .route('/')
  .get(authController.protect, complainController.activeComplains);

router
  .route('/allResolvedComplains')
  .get(authController.protect, complainController.allResolvedComplains);

router
  .route('/createComplain')
  .post(authController.protect, complainController.createComplain);

router
  .route('/complainByMe')
  .get(authController.protect, complainController.getByMeComplains);


router
  .route('/complainAgainstMe')
  .get(authController.protect, complainController.getAgainstMeComplains);

router
  .route('/editMyComplain/:id')
  .patch(authController.protect, complainController.editMyComplain);

module.exports = router;
