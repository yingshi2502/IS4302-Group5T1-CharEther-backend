var express = require('express');
var app = express();
var router = express.Router();
var upload = require('./app/config/multer.config.js');
 
global.__basedir = __dirname;
 
const db = require('./app/config/db.config.js');
  
// If your db don't have tables yet will auto-create
db.sequelize.sync({force: false}).then(() => {
  console.log('Sync if db not created yet');
}); 

app.use(express.static('resources'));	

require('./app/routers/file.router.js')(app, router, upload);
 
//port: 8081
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port); 
})