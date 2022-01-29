const mongoose=require("mongoose")
const userSchema = new mongoose.Schema(
	{
		email: { type: String },
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