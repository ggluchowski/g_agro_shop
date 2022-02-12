const express = require('express');
const router = express.Router();

const OrderedProduct = require('../models/orderedProduct.model');

router.post('/orderedProducts', async (req, res) => {
  try {
    const tab = req.body;

    for (const item of tab) {
      const newOrder = new OrderedProduct({});
      newOrder._id = item.id;
      newOrder.orderID = item.orderID;
      newOrder.name = item.name;
      newOrder.quantity = item.quantity;
      newOrder.price = item.price;
      newOrder.description = item.description;
      newOrder.sum = item.sum;
      await newOrder.save();
    }
    res.json({message: 'Order added to DB'});

  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
