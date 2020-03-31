module.exports = (app, router, upload) => {
    const projectWorker = require('../controllers/project.controller.js');


    router.use((req, res, next) => {
        console.log("/" + req.method);
        next();
    });

    app.post('/uploadImage', upload.single("uploadfile"),projectWorker.uploadImage);
    app.get('/downloadImage/:id', projectWorker.downloadImage);

    // app.post('/upload', upload.single("uploadfile"), fileWorker.uploadFile);

    // app.get('/api/files/getall', fileWorker.listAllFiles);

    // app.get('/api/files/:id', fileWorker.downloadFile);

    // app.use('/', router);

    app.use('*', (req, res) => {
        res.send("404", res.error, res.error.message);
    });
}