const express = require('express');
const router = express.Router();

const Contact = require('../models/contact.model');

router.post('/contacts', async (req, res) => {
  try {
    const { _id, email, companyName, firstName, lastName, city, postcode, streetAndHomeNumber, phone } = req.body;
    console.log(req.body);

    const newContact = new Contact({ _id, email, companyName, firstName, lastName, city, postcode, streetAndHomeNumber, phone });

    await newContact.save();
    res.json(newContact);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
