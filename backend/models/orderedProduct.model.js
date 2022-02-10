const mongoose = require('mongoose');

const orderedProductSchema = new mongoose.Schema({
  id: {type: String, required: true},
  name: {type: String, required: true},
  quantity: {type: Number, required: true, min: 1, max: 10},
  price: {type: Number, required: true},
  description: {type: String},
  sum: {type: Number, required: true},
});

module.exports = mongoose.model('OrderedProduct', orderedProductSchema);
