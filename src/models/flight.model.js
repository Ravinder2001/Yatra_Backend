/** @format */

const mongoose = require("mongoose");
const flightSchema = new mongoose.Schema(
	{
		logo: { type: String },
		flight: { type: String },
		model: { type: String },
		tfrom: { type: String },
		tto: { type: String },
		dur: { type: String },
		stop: { type: Number },
		price: { type: Number },
		mid: { type: String },
		mida: { type: String },
		midd: { type: String },
	},
	{
		versionKey: false,
	},
);
const flight = mongoose.model("Flight", flightSchema);
module.exports = flight;
