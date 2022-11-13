const catchAsync = require('./catchAsync');
const sendEmail = require('./email');

const ComplainModel = require('./../models/complain-model');
const User = require('../models/user-model');
//const Complain = require('./../models/complain-model');

exports.complaintCreationEmail = catchAsync(async (id) => {
  //console.log(id);
  const complain = await ComplainModel.findById(id);

  const complainer = await User.findById(complain.complainer).select(
    'name email'
  );
  const faulty = await User.findById(complain.faulty).select('name email');
  const reviewer = await User.findById(complain.reviewer).select('name email');

  const complainerName = complainer.name;
  const faultyName = faulty.name;
  const reviewerName = reviewer.name;

  let message = `Complain Title: ${complain.title} \n\n ${complainerName}, your complain has been lodged against ${faultyName}, and your selected ${reviewerName} as the reviewer`;

  await sendEmail({
    email: complainer.email,
    subject: 'Complain Lodged',
    message,
  });

  message = `Complain Title: ${complain.title} \n\n ${faultyName}, there is a complain against you made by ${complainerName}, and ${reviewerName} is the reviewer`;

  await sendEmail({
    email: faulty.email,
    subject: 'Complain against you',
    message,
  });

  message = `Complain Title: ${complain.title} \n\n ${reviewerName}, there is a complain to review, against ${faultyName} by ${complainerName}`;

  await sendEmail({
    email: reviewer.email,
    subject: 'Complain to review',
    message,
  });
});