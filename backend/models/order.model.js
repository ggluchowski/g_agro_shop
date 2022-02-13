const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new mongoose.Schema({
  _id: {type: Schema.Types.ObjectId, required: true },
  paymentMethod: { type: Schema.Types.ObjectId, required: true, ref: 'PaymentMethod' },
  delivery: { type: Schema.Types.ObjectId, required: true, ref: 'Delivery' },
  agreement: { type: [Schema.Types.ObjectId], required: true, ref: 'Agreement' },
  contact: { type: mongoose.ObjectId, required: true, ref: 'Contact' },
  orderedProduct: {type: [Schema.Types.ObjectId], required: true, ref: 'OrderedProduct'},
  sum: {type: Number, required: true},
});

module.exports = mongoose.model('Order', orderSchema);
