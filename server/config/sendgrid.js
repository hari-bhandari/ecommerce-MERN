const keys = require('./keys');
const { apiKey,keyID } = keys.sendgrid;
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(apiKey)


exports.sendEmail = (recipient, message) => {
    const msg = {
      from: `2012bhandari.ha@gmail.com`,
      to: recipient,
      subject: message.subject,
      text: message.text,
      html:message.html

    };
    sgMail
        .send(msg)
        .then(() => {
          console.log('Email sent')
        })
        .catch((error) => {
          console.error(error)
        })
};
