var express = require('express')
var router = express.Router()

const projectWorker = require('../controllers/project.controller.js');

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Project Router '+req.method);
  next();
})

router.post('', projectWorker.createProject);
router.get('',projectWorker.getProjects);
router.get('/:id',projectWorker.getProjectById);
router.put('/:id',projectWorker.updateProject);
router.put('/terminate/:id',projectWorker.terminateProject);
module.exports = router