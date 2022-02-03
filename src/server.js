const express = require("express")
const connect = require("./configs/db")
const path = require("path")
const app = express()
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const paymentRoute = require("../paymentRoute");
const userController = require("./controllers/api.controller");
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", paymentRoute);
app.use("", userController);
app.listen(PORT, async () => {
	await connect();
	console.log(`listening to ${PORT}`);
});