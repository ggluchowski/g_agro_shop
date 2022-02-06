const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  email: { type: String, require: true },
  companyName: { type: String },
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  city: { type: String, require: true, minlength: 3 },
  postcode: { type: String, require: true, length: 5 },
  streetAndHomeNumber: { type: String, require: true },
  phone: { type: String },
});

module.exports = mongoose.model('Contact', contactSchema);
