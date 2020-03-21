const env = require('./env.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
 
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});
 
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
db.files = require('../models/file.model.js')(sequelize, Sequelize);
db.allocations = require('../models/allocation.model.js')(sequelize, Sequelize);
db.donations = require('../models/donation.model.js')(sequelize, Sequelize);
db.project_images = require('../models/project_image.model.js')(sequelize, Sequelize);
db.projects = require('../models/project.model.js')(sequelize, Sequelize);
db.suppliers = require('../models/supplier.model.js')(sequelize, Sequelize);
db.user_roles = require('../models/user_role.model.js')(sequelize, Sequelize);

module.exports = db;