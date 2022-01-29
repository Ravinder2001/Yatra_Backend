const mongoose = require("mongoose")
const connect = () => {
    return mongoose.connect("mongodb+srv://ravinder:ravinder@yatradata.r9dgz.mongodb.net/yatraDatabase?retryWrites=true&w=majority")
}
module.exports = connect;