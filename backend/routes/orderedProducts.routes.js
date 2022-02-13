const express = require('express');
const router = express.Router();

const OrderedProduct = require('../models/orderedProduct.model');
const helpFunctions = require('../functions/functions');

router.post('/orderedProducts', async (req, res) => {
  try {
    let tab = req.body;

    for (let item of tab) {
      const descriptionEscape = helpFunctions.escape(item.description);

      if (item.id && item.orderID && item.name && item.quantity && item.sum && item.price) {
        if (item.quantity > 0 && item.quantity <= 10) {

          const newOrder = new OrderedProduct({});
          item.description = descriptionEscape;
          newOrder._id = item.id;
          newOrder.orderID = item.orderID;
          newOrder.name = item.name;
          newOrder.quantity = item.quantity;
          newOrder.price = item.price;
          newOrder.description = item.description;
          newOrder.sum = item.sum;
          await newOrder.save();
        } else {
          throw new Error('Wrong quantity');
        }
      } else {
        throw new Error('Wrong data!');
      }
    }

    res.json({ message: 'Order added to DB' });

  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
