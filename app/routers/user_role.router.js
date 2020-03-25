var express = require('express')
var router = express.Router()

const userRoleWorker = require('../controllers/user_role.controller.js');

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('User Role Router '+req.method);
  next();
})

router.post('/create', userRoleWorker.createUserRole);

module.exports = router