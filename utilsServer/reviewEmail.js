const catchAsync = require('./catchAsync');
const sendEmail = require('./email');

const ComplainModel = require('./../models/complain-model');
const User = require('../models/user-model');

exports.complainCloseEmail = catchAsync(async (id) => {
  const complain = await ComplainModel.findById(id)
    .populate('complainer')
    .populate('faulty')
    .populate('reviewer')
    .populate('status.closer');

  const complainer = complain.complainer;
  const faulty = complain.faulty;
  const reviewer = complain.reviewer;

  let message = `Complain Title: ${complain.title}\n\nThis complain has been closed\n\nComplainer: ${complainer.name}\nFaulty: ${faulty.name}\nReviewer: ${reviewer.name}\n\nVerdict: ${complain.status.comment}\n\nClosed By: ${complain.status.closer.name}`;

  await sendEmail({
    email: complainer.email,
    subject: 'Complain Closed',
    message,
  });

  await sendEmail({
    email: faulty.email,
    subject: 'Complain Closed',
    message,
  });

  await sendEmail({
    email: reviewer.email,
    subject: 'Complain Closed',
    message,
  });
});

exports.reviewerChangeEmail = catchAsync(async (id) => {
  const complain = await ComplainModel.findById(id)
    .populate('complainer')
    .populate('faulty')
    .populate('reviewer');

  const complainer = complain.complainer;
  const faulty = complain.faulty;
  const reviewer = complain.reviewer;

  let message = `Complain Title: ${complain.title}\n\nThe reviewer for the complain has been changed\n\nComplainer: ${complainer.name}\nFaulty: ${faulty.name}\nNew Reviewer: ${reviewer.name}\n\n`;

  await sendEmail({
    email: complainer.email,
    subject: 'Reviewer Changed',
    message,
  });

  await sendEmail({
    email: faulty.email,
    subject: 'Reviewer Changed',
    message,
  });

  await sendEmail({
    email: reviewer.email,
    subject: 'Reviewer Changed',
    message,
  });
});
