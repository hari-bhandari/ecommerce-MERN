const {emailTemplate}=require('../services/htmlTemplate')
exports.resetEmail = (host, resetToken) => {
  const message = {
    subject: 'Reset Password',
    text:
      `${
        'You are receiving this because you have requested to reset your password for your account.\n\n' +
        'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
        'http://'
      }${host}/reset-password/${resetToken}\n\n` +
      `If you did not request this, please ignore this email and your password will remain unchanged.\n`,
    html:emailTemplate(`Reset your password`,`${
            'You are receiving this because you have requested to reset your password for your account.\n\n' +
            'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
            'http://'
        }${host}/reset-password/${resetToken}\n\n` +
        `If you did not request this, please ignore this email and your password will remain unchanged.\n`)

  };

  return message;
};

exports.confirmResetPasswordEmail = () => {
  const message = {
    subject: 'Password Changed',
    text:
      `You are receiving this email because you changed your password. \n\n` +
      `If you did not request this change, please contact us immediately.`
  };
  html:emailTemplate(`Password change requested`,`You are receiving this email because you changed your password. If you did not request this change, please contact us immediately.  `)


  return message;
};

exports.merchantSignup = (host, { resetToken, email }) => {
  const message = {
    subject: 'Merchant Registration',
    text: `${
      'Congratulations! Your application has been accepted. Please complete your Merchant account signup by clicking on the link below. \n\n' +
      'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
      'http://'
    }${host}/merchant-signup/${resetToken}?email=${email}\n\n`
  };

  return message;
};

exports.signupEmail = name => {
  const message = {
    subject: 'Account Registration',
    text: `Hi ${name.firstName} ${name.lastName}! Thank you for creating an account with us!.`,
    html:emailTemplate(`Welcome ${name.firstName} to Wisecart `,`We are thrilled to have as a member of wisecart and we would like to welcome you. We hope you will enjoy your precious time with us. Keep shopping with us!  `)
  };

  return message;
};

exports.newsletterSubscriptionEmail = () => {
  const message = {
    subject: 'Newsletter Subscription',
    text:
      `You are receiving this email because you subscribed to our newsletter. \n\n` +
      `If you did not request this change, please contact us immediately.`,
    html:emailTemplate(`Thank you for subscribing to our newletters!`,`We are thrilled that you have requested for you to add you in out newsletter team.  From now on, we will be sending  you all the exciting offers. `)

  };
  html:

  return message;
};

exports.contactEmail = () => {
  const message = {
    subject: 'Contact Us',
    text: `We received your message! Our team will contact you soon. \n\n.Thanks. Kind regards,Wisecart`,
    html:emailTemplate(`Thank you for Contacting us`,`We received your message! Our team will contact you soon. \n\n.Thanks. Kind regards,Wisecart `)
  };

  return message;
};

exports.merchantApplicationEmail = () => {
  const message = {
    subject: 'Sell on MERN Store',
    text: `We received your request! Our team will contact you soon. \n\n`
  };

  return message;
};

exports.orderConfirmationEmail = order => {
  const message = {
    subject: `Order Confirmation ${order._id}`,
    text:
      `Hi ${order.user.profile.firstName}! Thank you for your order!. \n\n` +
      `We've received your order and will contact you as soon as your package is shipped. \n\n`,

  };


  return message;
};
