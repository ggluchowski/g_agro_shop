const express = require('express');
const router = express.Router();

const Contact = require('../models/contact.model');
const helpFunctions = require('../functions/functions');

router.post('/contacts', async (req, res) => {
  try {
    const { _id } = req.body;
    let { email, companyName, firstName, lastName, city, postcode, streetAndHomeNumber, phone } = req.body;

    const emailPattern = helpFunctions.emailPattern(email);
    const companyNameEscape = helpFunctions.escape(companyName);
    const firstNameEscape = helpFunctions.escape(firstName);
    const lastNameEscape = helpFunctions.escape(lastName);
    const cityEscape = helpFunctions.escape(city);
    const postcodeEscape = helpFunctions.escape(postcode);
    const streetAndHomeNumberEscape = helpFunctions.escape(streetAndHomeNumber);
    const phoneEscape = helpFunctions.escape(phone);

    if (email && firstName && lastName && city && postcode && streetAndHomeNumber) {
      if (postcode.length === 6) {

        email = emailPattern;
        companyName = companyNameEscape;
        firstName = firstNameEscape;
        lastName = lastNameEscape;
        city = cityEscape;
        postcode = postcodeEscape;
        streetAndHomeNumber = streetAndHomeNumberEscape;
        phone = phoneEscape;

        const newContact = new Contact({ _id, email, companyName, firstName, lastName, city, postcode, streetAndHomeNumber, phone });

        await newContact.save();
        res.json(newContact);

      } else {
        throw new Error('Wrong input! Postcode incorrect!!!');
      }
    } else {
      throw new Error('Wrong input!');
    }
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
