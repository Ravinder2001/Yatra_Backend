const express = require("express")
const router = express.Router()
const User = require("../models/user.model")
const Flight = require("../models/flight.model");
const https = require("https");
const qs = require("querystring");
const PORT = process.env.PORT || 4000;
// const checksum_lib = require("../Paytm/checksum");
// const config = require("../Paytm/config");
const parseUrl = express.urlencoded({ extended: false });
const parseJson = express.json({ extended: false });

router.post("/user", async (req, res) => {
	try {
		const user = await User.create(req.body);
		res.send(user);
	} catch (err) {
		console.log(err.message);
		res.send(err.message);
	}
});

router.get("/", async (req, res) => {
	try {
		const user = await User.find().lean().exec();

		return res.send(user);
	} catch (err) {
		return res.send(err.message);
	}
});
router.get("/userData", async (req, res) => {
	try {
		let qurey = req.query.mobile;
		const user = await User.findOne({ mobile: qurey }).lean().exec();

		return res.send(user);
	} catch (err) {
		return res.send(err.message);
	}
});
router.post("/flight", async (req, res) => {
	try {
		const flight = await Flight.create(req.body);
		res.send(flight);
	} catch (err) {
		console.log(err.message);
		res.send(err.message);
	}
});
router.get("/flights", async (req, res) => {
	try {
		const flight = await Flight.find().lean().exec();

		return res.send(flight);
	} catch (err) {
		return res.send(err.message);
	}
});

module.exports=router