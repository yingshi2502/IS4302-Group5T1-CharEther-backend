var upload = require('../config/multer.config.js');
var express = require('express');
var router = express.Router();

const projectWorker = require('../controllers/project.controller.js');

router.use((req, res, next) => {
    // console.log("/" + req.method);
    next();
});

router.post('/upload', upload.single("uploadfile"), projectWorker.uploadImage);

router.get('/download/:id', projectWorker.downloadImage);//only for verification of uploading

router.get('/project/:id', projectWorker.getImage);


module.exports = router;