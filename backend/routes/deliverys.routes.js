const express = require('express');
const router = express.Router();

const Delivery = require('../models/delivery.model');

router.get('/deliverys', async (req, res) => {
  try {
    const result = await Delivery.find();
    if (!result) res.status(404).json({ delivery: 'Not found' });
    else res.json(result);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
