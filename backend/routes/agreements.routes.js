const express = require('express');
const router = express.Router();

const Agreement = require('../models/agreement.model');

router.get('/agreements', async (req, res) => {
  try {
    const result = await Agreement.find();
    if (!result) res.status(404).json({ agreement: 'Not found' });
    else res.json(result);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
