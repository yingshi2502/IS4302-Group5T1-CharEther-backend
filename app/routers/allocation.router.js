var upload = require('../config/multer.config.js');
var express = require('express');
var router = express.Router();

const allocationWorker = require('../controllers/allocation.controller.js');

router.use((req, res, next) => {
    console.log("/" + req.method);
    next();
});
router.post('/upload', upload.single("uploadfile"), allocationWorker.createAllocation);
router.get('/download/:id', allocationWorker.downloadAllocationDoc);

module.exports = router