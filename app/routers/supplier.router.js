var express = require('express')
var router = express.Router()

const supplierWorker = require('../controllers/supplier.controller.js');

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Supplier Router '+req.method);
  next();
})

router.post('/create', supplierWorker.createSupplier);

module.exports = router