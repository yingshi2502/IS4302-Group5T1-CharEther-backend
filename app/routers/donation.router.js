var express = require('express')
var router = express.Router()

const donationWorker = require('../controllers/donation.controller.js');

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Donation Router '+req.method);
  next();
})

router.post('', donationWorker.createDonation);
router.get('',donationWorker.getDonations);
router.get('/:id',donationWorker.getDonationById);
module.exports = router