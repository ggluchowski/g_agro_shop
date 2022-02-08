const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  email: { type: String, required: true },
  companyName: { type: String },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  city: { type: String, required: true, minlength: 3 },
  postcode: { type: String, required: true, length: 5 },
  streetAndHomeNumber: { type: String, required: true },
  phone: { type: String },
});

module.exports = mongoose.model('Contact', contactSchema);
