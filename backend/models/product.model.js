const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {type: String},
  price: {type: Number},
  ifQuantity: {type: Boolean},
  description: {type: String},
  images: {type: [String]},
});

module.exports = mongoose.model('Product', productSchema);
