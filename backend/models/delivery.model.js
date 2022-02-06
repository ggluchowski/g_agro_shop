const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
  name: { type: String, require: true },
  price: { type: Number, require: true },
});

module.exports = mongoose.model('Delivery', deliverySchema);
