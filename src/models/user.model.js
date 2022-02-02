const mongoose=require("mongoose")
const userSchema = new mongoose.Schema(
	{
		mobile: { type: String, unique: true },
		email: { type: String, unique: true },
		password: { type: String },

		fname: { type: String },
		lname: { type: String },

		login: { type: String },
	},
	{
		versionKey: false,
	},
);
const User = mongoose.model("User", userSchema)
module.exports=User