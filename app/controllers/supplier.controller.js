const db = require('../config/db.config.js');
const Supplier = db.suppliers;

exports.createSupplier = (req, res) => {
	console.log("createSupplier");
	console.log(req.body);
	Supplier.create({
		supplierId: req.body.supplierId,
		name: req.body.name,
		description: req.body.description
	}).then(() => {
		res.send('Supplier created successfully!');
	})
}