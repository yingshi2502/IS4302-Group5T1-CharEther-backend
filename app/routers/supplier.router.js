var express = require('express')
var router = express.Router()

const supplierWorker = require('../controllers/supplier.controller.js');

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Supplier Router '+req.method);
  next();
})

router.post('', supplierWorker.createSupplier);
router.get('',supplierWorker.getSuppliers);

module.exports = router