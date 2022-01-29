const mongoose=require("mongoose")
const userSchema = new mongoose.Schema(
    {
        name: {type:String},
      father_name: {type:String},
      email: {type:String},
      mobile: {type:String}
    }, {
        versionKey:false
    }
)
const User = mongoose.model("User", userSchema)
module.exports=User