const express = require('express');
const router = express.Router();

const Product = require('../models/product.model');
// const helpFunctions = require('../functions/functions');

router.get('/products', async (req, res) => {
  try {
    const result = await Product.find();
    if (!result) res.status(404).json({ product: 'Not found' });
    else res.json(result);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/products/:id', async (req,res) => {
  try {
    const result = await Product
      .findById(req.params.id);
    const tabResult = [];
    tabResult.push(result);
    if (!result) res.status(404).json({ product: 'Not found' });
    else res.json(tabResult);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
