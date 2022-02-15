const express = require('express');
const router = express.Router();

const Order = require('../models/order.model');

router.post('/order', async (req, res) => {
  try {
    const { _id, payment, delivery, agreements, contactID, orderedProduct, sum } = req.body;

    console.log(req.body);

    const newOrder = new Order({
      _id: _id,
      paymentMethod: payment,
      delivery: delivery,
      agreement: agreements,
      contact: contactID,
      orderedProduct: orderedProduct,
      sum: sum});
    await newOrder.save();
    res.json(newOrder);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
