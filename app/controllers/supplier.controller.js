const db = require('../config/db.config.js');
const Supplier = db.suppliers;
let to = require('await-to-js').default;

exports.createSupplier = async (req, res) => {
	const [err,resp] = await to(Supplier.create({
		supplierId: req.body.supplierId,
		name: req.body.name,
		description: req.body.description
	}))
	if(err)
		res.status(500).send(err);
	else
		res.send(resp);
}

exports.getSuppliers = async (req, res) => {
	const [err,resp] = await to(Supplier.findAll())
	if(err)
		res.status(404).send(err);
	else
		res.send(resp);
}