const express = require("express")
const router = express.Router()
const User = require("../models/user.model")

router.post("/user", async (req, res) => {
    try{
        const user = await User.create(req.body)
        res.send(user)
    } catch (err) {
        console.log(err.message)
    res.send(err.message)
}
})

router.get("/", async (req, res) => {
	try {
		const user = await User.find().lean().exec();

		return res.send(user);
	} catch (err) {
		return res.send(err.message);
	}
});

module.exports=router