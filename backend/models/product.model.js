const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {type: String, require: true},
  price: {type: Number, require: true},
  ifQuantity: {type: Boolean, require: true},
  description: {type: String, require: true},
  images: {type: [String]},
});

module.exports = mongoose.model('Product', productSchema);
