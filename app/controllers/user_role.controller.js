const db = require('../config/db.config.js');
const user_role = db.user_roles;

exports.createUserRole = (req, res) => {
	console.log("createUserRole");
	console.log(req.body);
	user_role.create({
		address: req.body.address,
		role_type: req.body.role_type
	}).then(() => {
		res.send('User role created successfully!');
	})
}