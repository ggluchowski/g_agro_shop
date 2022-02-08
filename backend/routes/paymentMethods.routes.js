const express = require('express');
const router = express.Router();

const PaymentMethod = require('../models/paymentMethod.model');

router.get('/paymentMethods', async (req, res) => {
  try {
    const result = await PaymentMethod.find();
    if (!result) res.status(404).json({ paymentMethod: 'Not found' });
    else res.json(result);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
