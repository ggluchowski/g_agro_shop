const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
}, {collection: 'deliverys'});

module.exports = mongoose.model('Delivery', deliverySchema);
