const catchAsync = require('../utilsServer/catchAsync');
const AppError = require('../utilsServer/appError');
const authController = require('./authController');
const User = require('../models/user-model');

exports.viewMe = catchAsync(async (req, res, next) => {
  try {
    //console.log(req.userID);
    const user = await User.findById(req.userID);

    res.status(200).json({
      status: 'success',
      user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json(`Server error`);
  }
});
