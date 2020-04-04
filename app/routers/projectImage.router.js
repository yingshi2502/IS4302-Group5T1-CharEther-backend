var upload = require('../config/multer.config.js');
var express = require('express');
var router = express.Router();

const projectWorker = require('../controllers/project.controller.js');

router.use((req, res, next) => {
    // console.log("/" + req.method);
    next();
});

router.post('/upload', upload.single("uploadfile"), projectWorker.uploadImage);
router.get('/project/:id', projectWorker.getImage);
router.get('/download/:id', projectWorker.downloadImage);

module.exports = router;