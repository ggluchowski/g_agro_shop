const mongoose = require('mongoose');

const agreementSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model('Agreement', agreementSchema);
