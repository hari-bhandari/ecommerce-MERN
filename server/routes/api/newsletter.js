const express = require('express');
const router = express.Router();

const mailchimp = require('../../services/mailchimp');
const sendGrid = require('../../services/sendGrid');

router.post('/subscribe', async (req, res) => {
  const email = req.body.email;
  if (!email) {
    return res.status(400).json({ error: 'You must enter an email address.' });
  }

  const result = await mailchimp.subscribeToNewsletter(email);

  if (result.status === 400) {
    return res.status(400).json({ error: result.title });
  }

  await sendGrid.sendEmail(email, 'newsletter-subscription');

  res.status(200).json({
    success: true,
    message:'Email has successfully been added to subscription list'
  });
});

module.exports = router;
