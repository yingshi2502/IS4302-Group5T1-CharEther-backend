const env = {
  database: 'charether',
  username: 'root',
  password: 'yingshi',//change to your own
  host: 'localhost',
  dialect: 'mysql',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};
 
module.exports = env;