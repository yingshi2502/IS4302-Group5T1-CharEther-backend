var express = require('express')
var router = express.Router()

const mailWorker = require('../controllers/mail.Controller.js');

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Mail Router '+req.method);
  next();
})

router.get('', (req,res) =>{console.log("hello"); res.send("done")});
router.post('/donationAcceptance', mailWorker.donationOutcome);
// router.post('', (req,res) =>{console.log(req.body); res.send("done")});
module.exports = router