const db = require('../config/db.config.js');
const Donation = db.donations;
let to = require('await-to-js').default;

exports.createDonation = async (req, res) => {
	const [err,resp] = await to(Donation.create({
        donationId: req.body.donationId,
        donor_email: req.body.donor_email,
        description: req.body.description 
    }))
	if(err)
		res.status(500).send(err);
	else
		res.send(resp);
}

exports.getDonations = async (req, res) => {
	const [err,resp] = await to(Donation.findAll())
	if(err)
		res.status(404).send(err);
	else
		res.send(resp);
}
exports.getDonationById = async (req, res) => {
	const [err,resp] = await to(Donation.findAll({
		where: {donationId : req.params.id}
	}))
	if(resp.length==0)
		res.status(404).send("No Donation has been found by this ID");
	else
		res.send(resp);
}
