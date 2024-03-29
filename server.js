var express = require('express');
var app = express();
var router = express.Router();
var upload = require('./app/config/multer.config.js');
global.__basedir = __dirname;
const db = require('./app/config/db.config.js');
var cors = require('cors');
var supplierRouter = require('./app/routers/supplier.router.js');
var userRoleRouter = require('./app/routers/user_role.router.js');
var projectRouter = require('./app/routers/project.router.js');
var donationRouter = require('./app/routers/donation.router.js');
var allocationRouter = require('./app/routers/allocation.router.js');
var projectImageRouter = require('./app/routers/projectImage.router.js');
var mailRouter = require('./app/routers/mail.router.js')

// If your db don't have tables yet will auto-create
db.sequelize.sync({force: true}).then(() => {
  console.log('Sync if db not created yet');
}); 
app.use(cors());

app.use(express.static('resources'));	
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({
  extended: true
}));
app.use('/suppliers',supplierRouter);
app.use('/user_roles',userRoleRouter);
app.use('/projects',projectRouter);
app.use('/donations',donationRouter);
app.use('/allocations', allocationRouter);
app.use('/projectImages',projectImageRouter);
app.use('/email',mailRouter);
// require('./app/routers/projectImage.router.js')(app, router, upload);
require('./app/routers/file.router.js')(app, router, upload);

//port: 8081
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port); 
})