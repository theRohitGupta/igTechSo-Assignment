const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        email : {
            type : String,
            required : true,
            trim : true
        },
        password : {
            type : String,
            required : true,
        },
        reviews : [
            {
                type : mongoose.Schema.Types.ObjectId,
                ref : "Review"
            }
        ]
    }
);

module.exports = mongoose.model("User", userSchema);