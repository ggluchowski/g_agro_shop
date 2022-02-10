// const { ObjectId } = require('mongoose');
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  _id: { type: mongoose.ObjectId, required: true },
  email: { type: String, required: true },
  companyName: { type: String },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  city: { type: String, required: true, minlength: 3 },
  postcode: { type: String, required: true, length: 6 },
  streetAndHomeNumber: { type: String, required: true },
  phone: { type: String },
});

module.exports = mongoose.model('Contact', contactSchema);
